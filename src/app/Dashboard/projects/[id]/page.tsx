import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/project";

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.slug,
  }));
}

export default async function ProjectDetail({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find(p => p.slug === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen py-6 sm:py-12 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link 
          href="/"
          className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6 sm:mb-8 text-sm sm:text-base"
        >
          ← Retour à la page d'acceuil
        </Link>

        <div className="glass-panel rounded-lg sm:rounded-2xl lg:rounded-[2rem] overflow-hidden">
          <div className="relative h-48 sm:h-64 md:h-96">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-2 mb-4 sm:mb-6">
              <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs sm:text-sm border border-white/10">
                {project.category}
              </span>
              <div className="flex gap-4 text-sm sm:text-base">
                {(project.github || id.includes('sites-web-personnels-clients')) && (
                  <a href={project.github || 'https://github.com/Shadowstrikesblu'} className="text-blue-200 hover:text-white transition-colors">
                    GitHub
                  </a>
                )}
                {project.live && (
                  <a href={project.live} className="text-blue-200 hover:text-white transition-colors">
                    Voir en ligne
                  </a>
                )}
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8">
              {project.fullDescription}
            </p>
            <div className="mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Technologies utilisées</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-white/10 text-gray-100 px-2.5 sm:px-3 py-1 rounded-md border border-white/10 text-xs sm:text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white">Fonctionnalités principales</h3>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-300">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { id: string } }) {
  const { id } = params;
  const project = projects.find(p => p.slug === id);

  if (!project) {
    return {
      title: 'Projet non trouvé'
    };
  }

  return {
    title: `${project.title} - Harvey Mouloundou`,
    description: project.description,
  };
}