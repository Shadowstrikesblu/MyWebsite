'use client';

interface Skill {
  name: string;
  level: number;
}

const skillsData: Skill[] = [
  { name: 'React/Next.js', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 75 },
  { name: 'Python', level: 70 },
  { name: 'DevOps/Docker', level: 65 },
  { name: 'Tailwind CSS', level: 88 },
  { name: 'Database (MySQL)', level: 75 },
];

export default function SkillsWithProgress() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in">
          Compétences Techniques
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skill, index) => (
            <div key={skill.name} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex justify-between mb-2">
                <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                <span className="text-blue-600 dark:text-blue-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-blue-500 to-blue-600 h-full rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
