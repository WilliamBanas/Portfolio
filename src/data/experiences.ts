export type Experience = {
  id: string
  role: string
  company: string
  period: string
  location: string
  description: string
  tags: string[]
}

export const experiences: Experience[] = [
  {
    id: 'exp-yvelinespc',
    role: 'Développeur Front-End',
    company: 'YvelinesPC',
    period: '04/2026 - 05/2026',
    location: 'Ile de France, France',
    description:
      "Conception et développement d’un site vitrine mobile-first en React, du cadrage à la mise en ligne, avec des échanges directs avec le client pour valider chaque étape.",
    tags: ['NextJs', 'TypeScript', 'CSS'],
  },
  {
    id: 'exp-dnpj',
    role: 'Concepteur Développeur',
    company: 'Ministère de l\'intérieur (DNPJ)',
    period: '10/2023 - 02/2025',
    location: 'Nanterre, France',
    description:
      "Refonte complète d’une application métier critique : cadrage des besoins avec les utilisateurs finaux, conception de l’architecture et de l’UX/UI, développement fullstack et rédaction de la documentation technique pour faciliter la reprise par les équipes.",
    tags: ['TypeScript', 'React', 'NestJs', 'Node.js', 'PostgreSQL','API REST', 'Conception'],
  },
  {
    id: 'exp-collecty\'form',
    role: 'Développeur Full-Stack',
    company: 'Collecty\'form',
    period: '07/2023 - 09/2026',
    location: 'Ile de France, France',
    description:
      "Conception et développement d’une application interne en équipe produit agile : livraison de fonctionnalités frontend et backend conformes aux spécifications en 2 mois, avec répartition des tâches et mise en place des rituels agiles.",
    tags: ['React','Node.js', 'ExpressJs', 'CSS', 'API REST'],
  },
]
