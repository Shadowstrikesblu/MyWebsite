import Link from "next/link";

const SKILL_ICONS: Record<string, string> = {
  "React": "/icons/react.svg",
  "Next.js": "/icons/nextjs.svg",
  "TypeScript": "/icons/typescript.svg",
  "Node.js": "/icons/nodejs.svg",
  "Python": "/icons/python.svg",
  "PostgreSQL": "/icons/postgresql.svg",
  "MongoDB": "/icons/mongodb.svg",
  "Tailwind CSS": "/icons/tailwindcss.svg",
};

function SkillIcon({ skill }: { skill: string }) {
  const src = SKILL_ICONS[skill];
  if (!src) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" aria-hidden="true" width={28} height={28} className="w-7 h-7 shrink-0" loading="lazy" />;
}

interface SkillsBubbleProps {
  skills?: string[];
  showAboutLink?: boolean;
  title?: string;
  description?: string;
}

export default function SkillsBubble({ 
  skills = ["React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL", "MongoDB", "Tailwind CSS"],
  showAboutLink = true,
  title = "Mes Compétences",
  description
}: SkillsBubbleProps) {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 section-band">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          {title}
        </h2>
        {description && (
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
            {description}
          </p>
        )}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div 
              key={skill} 
              className="glass-card p-6 rounded-2xl hover:shadow-lg transition-shadow group"
            >
              <p className="flex items-center justify-center gap-3 font-semibold text-white group-hover:text-blue-200 transition-colors">
                <SkillIcon skill={skill} />
                {skill}
              </p>
            </div>
          ))}
        </div>
        {showAboutLink && (
          <div className="mt-12">
            <Link
              href="/about"
              className="btn px-6 py-3 text-base"
            >
              En savoir plus sur moi
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

// Alternative individual skill bubble component
export function SkillBubble({ skill, className = "" }: { skill: string; className?: string }) {
  return (
    <div className={`glass-card p-4 rounded-2xl hover:shadow-lg transition-shadow group ${className}`}>
      <p className="flex items-center justify-center gap-2 font-semibold text-white group-hover:text-blue-200 transition-colors text-center">
        <SkillIcon skill={skill} />
        {skill}
      </p>
    </div>
  );
}