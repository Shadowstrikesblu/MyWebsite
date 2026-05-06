import Image from "next/image";
import Link from "next/link";
import { ProjectsSection } from "@/components/Card";
import SkillsBubble from "@/components/Skillsbubble";
import ProjectCarousel from "@/components/ProjectCarousel";
import GitHubProjects from "@/components/GitHubProjects";
import { features } from "process";
import { projects } from "../data/project";

export default function Home() {
  // Project data - you can add more projects here
  return (
    <div className="min-h-screen text-white">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 section-divider section-band">
        <div className="max-w-7xl mx-auto">
          <div className="text-center glass-panel rounded-[2rem] px-6 py-16 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
              Bienvenue sur mon{" "}
              <span className="text-blue-300">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Je suis Harvey Mouloundou, développeur Full Stack passionné par la création 
              d'applications web modernes et d'expériences utilisateur exceptionnelles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/Resume"
                className="inline-flex items-center px-8 py-3 border border-white/10 text-base font-medium rounded-md text-white bg-white/10 hover:bg-white/15 transition-colors animate-slide-up glass-surface"
              >
                Voir mon CV
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-white/10 text-base font-medium rounded-md text-gray-100 bg-white/10 hover:bg-white/15 transition-colors animate-slide-up glass-surface"
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Project Carousel */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 section-divider section-band">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center animate-fade-in">
            Projets en vedette
          </h2>
          <ProjectCarousel projects={projects} />
        </div>
      </section>

      {/* Projects Section */}
      <div className="section-divider">
        <ProjectsSection projects={projects} />
      </div>

      {/* GitHub Projects */}
      <div className="section-divider">
        <GitHubProjects />
      </div>

      {/* Skills Preview Section */}
      <div className="section-divider">
        <SkillsBubble />
      </div>
    </div>
  );
}
