import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  category: string;
  slug?: string;
  github?: string;
  live?: string;
  features?: string[];
}

interface ProjectsSectionProps {
  projects: Project[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card rounded-[1.5rem] overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-medium border border-white/10">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-white/10 text-gray-200 px-3 py-1 rounded-md text-sm border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <Link
          href={`/Dashboard/projects/${project.slug}`}
          className="inline-flex items-center text-blue-200 hover:text-white font-medium transition-colors"
        >
          Voir le projet
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

// Projects Section Component
export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 section-band">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mes Projets Personnels
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents qui démontrent mes compétences 
            en développement web et ma passion pour l'innovation technologique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}