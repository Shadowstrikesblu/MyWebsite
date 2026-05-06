'use client';

interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience' | 'project';
}

const timelineData: TimelineItem[] = [
  {
    year: '2019',
    title: 'Baccalauréat Scientifique',
    subtitle: 'Lycée Dominique Savio',
    description: 'Spécialité Mathématiques - Mention Assez Bien',
    type: 'education'
  },
  {
    year: '2019-2022',
    title: 'Licence Sciences du Numérique',
    subtitle: 'Institut Catholique de Lille',
    description: 'Formation complète en développement web et algorithmes',
    type: 'education'
  },
  {
    year: '2021',
    title: 'Stage SONEC Africa',
    subtitle: 'Abidjan',
    description: 'Développement de plateformes collaboratives gouvernementales',
    type: 'experience'
  },
  {
    year: '2021-2023',
    title: 'Web Developer (Alternance)',
    subtitle: 'WYMEE, Reims',
    description: 'Full-stack Java/Vue.js, parseur de CV, déploiement VPS',
    type: 'experience'
  },
  {
    year: '2022-2024',
    title: 'Master 2 Cybersécurité',
    subtitle: 'Institut Catholique de Lille',
    description: 'Spécialisation en sécurité et protection des données',
    type: 'education'
  },
  {
    year: '2023-2024',
    title: 'Data Analyst Cybersécurité',
    subtitle: 'Schneider Electric',
    description: 'Scripts de détection, gestion de données, analyse avancée',
    type: 'experience'
  },
  {
    year: '2025',
    title: 'Consultant Dev Junior',
    subtitle: 'IPASYS, Garches',
    description: 'Sites web Ruby avec FAVEOD Designer',
    type: 'experience'
  },
  {
    year: '2025-2026',
    title: 'Ingénieur DevOps',
    subtitle: 'Congo Digital',
    description: 'Déploiement .NET/NodeJS, tests automatisés, sécurité',
    type: 'experience'
  },
  {
    year: '2026-2028',
    title: 'Master 1 Cloud DevOps',
    subtitle: 'ETNA',
    description: 'Formation continue en Cloud et DevOps',
    type: 'education'
  }
];

export default function Timeline() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center animate-fade-in">
          Mon Parcours
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {/* Timeline items */}
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slide-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                {/* Content */}
                <div className="w-1/2 px-4">
                  <div className={`p-4 glass-card rounded-2xl shadow hover:shadow-lg transition-shadow ${
                    item.type === 'education' ? 'border-l-4 border-blue-500' :
                    item.type === 'experience' ? 'border-l-4 border-green-500' :
                    'border-l-4 border-purple-500'
                  }`}>
                    <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{item.subtitle}</p>
                    <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="w-fit">
                  <div className={`w-4 h-4 rounded-full border-4 border-white dark:border-gray-900 ${
                    item.type === 'education' ? 'bg-blue-500' :
                    item.type === 'experience' ? 'bg-green-500' :
                    'bg-purple-500'
                  }`}></div>
                </div>

                {/* Spacer */}
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
