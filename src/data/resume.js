

// Personal Information Constants
export const PERSONAL_INFO = {
  name: 'Harvey MOULOUNDOU',
  title: 'Ingénieur Informatique junior – Audit & Cybersécurité',
  objective: 'Recherche : CDI en Audit & Cybersécurité – Disponible immédiatement',
  email: 'hmoulk8@gmail.com',
  location: 'Sèvres, France',
  phone: '+33 7 68 72 70 43',
};

// Professional Summary
export const PROFESSIONAL_SUMMARY = `Ingénieur informatique titulaire d'un Master 2 en cybersécurité, avec trois ans d'expérience en développement, mise en production et sécurité applicative (Python, SQL, Windows, Linux). J'ai cartographié des actifs exposés chez Schneider Electric et testé la sécurité d'applications en production. Je recherche un CDI en audit IT et cybersécurité, pour appliquer cette double lecture technique et risque au contrôle interne et à la conformité. Disponible immédiatement.`;

export const SKILLS = {
  technical: ['Python', 'Bash', 'PowerShell', 'GitLab CI/CD', 'Git', 'SQL', 'Azure', 'AWS', 'Linux', 'Windows Server'],
  audit: ["Analyse de surface d'exposition", 'Burp Suite', 'OWASP ZAP', 'ISO 27001', 'RGPD', 'Audit SI'],
};

export const Education = [
  {
    degree: 'Code2Work – Formation DevOps',
    institution: 'École des Technologies Numériques Avancées',
    period: 'Mars 2026 – Septembre 2026',
    content: [],
  },
  {
    degree: 'Master 2 Informatique – Parcours Ingénierie des Réseaux, Communication & Sécurité',
    institution: 'Institut Catholique de Lille',
    period: 'Septembre 2025 – Avril 2026',
    content: [],
  },
  {
    degree: 'Licence 3 Informatique – Sciences du Numérique',
    institution: 'Institut Catholique de Lille',
    period: 'Septembre 2019 – Avril 2022',
    content: [],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: 'Ingénieur DevOps',
    company: 'Congo Digital, France',
    period: 'Septembre 2025 – Mars 2026',
    responsibilities: [
      'Évaluation de la sécurité applicative (OWASP ZAP, Burp Suite) : toutes les vulnérabilités détectées par ZAP ont été corrigées.',
      'Mise en production et maintenance de 2 applications (back-end .NET ; front-end Node.js) sur Windows / IIS.',
      'Pipelines CI/CD permettant un déploiement quasi instantané des mises à jour, avec traçabilité des changements.',
      "Diagnostic d'incidents de production à partir de l'analyse des logs.",
    ],
  },
  {
    title: 'Analyste Cybersécurité & Données',
    company: 'Schneider Electric, Lille – Alternance',
    period: 'Octobre 2023 – Septembre 2024',
    responsibilities: [
      'Script Python de détection hebdomadaire des actifs exposés sur Internet, révélant plusieurs dizaines de machines exposées chaque semaine.',
      'Contrôle manuel systématique des résultats du script avant remontée des constats.',
      "Analyse de données de sécurité (Pandas, NumPy) et suivi de l'inventaire des assets.",
      'Documentation des constats et contribution au plan de remédiation.',
    ],
  },
  {
    title: 'Développeur Full Stack',
    company: 'Wymee, Reims – Alternance',
    period: 'Septembre 2021 – Avril 2023',
    responsibilities: [
      "Développement Full-Stack (Java, Vue.js), conception d'APIs REST, déploiement sur VPS Linux.",
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


