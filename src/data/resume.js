

// Personal Information Constants
export const PERSONAL_INFO = {
  name: 'Harvey Kereth MOULOUNDOU',
  title: 'Développeur Angular',
  email: 'moulou_h@etna-alternance.net',
  location: 'Sèvres, France',
  phone: '+33 7 68 72 70 43',
};

// Professional Summary
export const PROFESSIONAL_SUMMARY = `Étudiant en Master 1 Cloud DevOps à l'École des Technologies Numériques Avancées et détenteur d'un diplôme de Master 2 CYBER à l'institut Catholique de Lille, je recherche une alternance en Développement Web avec Angular.`;

export const SKILLS = {
  frontend: ['ReactJS', 'VueJS', 'TypeScript', 'JavaScript', 'Python', 'PHP', 'C#', 'MySQL', 'Angular'],
  backend: [
    'DevOps & Cloud: VPS (Windows/IIS), AWS, déploiement applicatif',
    'Tests & Qualité: Jest, Cypress, Postman',
    'DevSecOps: Burp Suite, ZAP, analyse de vulnérabilités',
    'Backend: .NET, NodeJS, Java, Ruby (FAVEOD)',
    'CI/CD: IIS, intégration APIs, déploiement VPS'
  ],
  softSkills: ['Travail en autonomie', 'À l\'aise avec les langues', 'Inventif & créatif', 'Curiosité technique', 'Sens du service'],
  languages: ['Français (Langue maternelle)', 'Anglais (C1)', 'Allemand (B1)']
};

// Skills Data

export const Education = [
{
  degree: 'Master 1 Cloud DevOps',
  institution: 'ETNA – École des Technologies Numériques Avancées',
  period: '2026 – 2028',
  content: []
},
{
  degree: 'Master 2 Cybersécurité – Campus EuraTechnologies',
  institution: 'Institut Catholique de Lille',
  period: '2022 – 2024',
  content: []
},
{
  degree: 'Licence 3 Sciences du Numérique',
  institution: 'Institut Catholique de Lille',
  period: '2019 – 2022',
  content: []
}
];
export const WORK_EXPERIENCE = [
  {
    title: 'Ingénieur DevOps',
    company: 'Congo Digital (pour WYMEE, France)',
    period: 'Septembre 2025 – Mars 2026',
    responsibilities: [
      'Déploiement d\'applications backend .NET et frontend NodeJS sur VPS Windows via IIS',
      'Mise en place de tests automatisés (Jest, Cypress) et tests API (Postman)',
      'Tests de sécurité (Burp Suite, ZAP)',
      'Maintenance, supervision et optimisation des performances applicatives',
      'Supervision, maintenance et suivi de l\'environnement',
    ],
  },
  {
    title: 'Consultant Dev Junior',
    company: 'IPASYS, Garches (France)',
    period: 'Février 2025 – Juin 2025',
    responsibilities: [
      'Création et maintenance de sites web en Ruby via la technologie FAVEOD Designer',
      'Support applicatif et amélioration continue des solutions développées',
    ],
  },
  {
    title: 'Développeur Web',
    company: 'WYMEE, Reims',
    period: '2021 – 2023',
    responsibilities: [
      'Recherche et développement d\'un parseur de CV en Java',
      'Développement full-stack (Backend Java / Adonis – Frontend Vue.js)',
      'Conception d\'outils de visualisation et traitement de données JSON',
      'Déploiement sur environnements VPS et intégration d\'APIs',
      'Participation aux mises en production et maintenance applicative',
    ],
  },
  {
    title: 'Analyste de données en Cybersécurité (Alternance)',
    company: 'Schneider Electric',
    period: '2023 – 2024',
    responsibilities: [
      'Développement de scripts de détection de machines exposées sur Internet',
      'Gestion d\'espaces de stockage de données',
      'Analyse avancée de données de cybersécurité',
    ],
  },
  {
    title: 'Stage',
    company: 'SONEC AFRICA, Abidjan',
    period: '2021',
    responsibilities: [
      'Développement de plateformes collaboratives gouvernementales',
      'Vérification fonctionnelle d\'un système de gestion des permis de conduire',
    ],
  },
];

// Projects Data
export const PROJECTS = [
  {
    name: 'Site web Portfolio',
    description: 'Site personnel présentant les compétences, expériences et projets',
    technologies: ['TypeScript', 'OVHCLOUD'],
    link: 'https://vparfait.com',
  },
  {
    name: 'Lecteur musical',
    description: 'Application de lecture vidéo avec gestion de comptes et système de commentaires',
    technologies: ['EXPO GO', 'React Native'],
    link: 'https://github.com/Shadowstrikesblu',
  },
];


