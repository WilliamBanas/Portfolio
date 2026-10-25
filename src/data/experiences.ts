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
      "Développement de plusieurs applications SaaS pour des clients du secteur culturel. Mise en place d'une architecture React/Node.js, de tests automatisés et d'une CI/CD sur mesure.",
    tags: ['NextJs', 'TypeScript', 'CSS'],
  },
  {
    id: 'exp-dnpj',
    role: 'Concepteur Développeur',
    company: 'Ministère de l\'intérieur (DNPJ)',
    period: '10/2023 - 02/2025',
    location: 'Nanterre, France',
    description:
      "Refonte d'interfaces e-commerce et création d'un design system partagé. Amélioration des performances et de l'accessibilité sur l'ensemble des parcours d'achat.",
    tags: ['TypeScript', 'React', 'NestJs', 'Node.js', 'PostgreSQL','API REST', 'Conception'],
  },
  {
    id: 'exp-collecty\'form',
    role: 'Développeur Full-Stack',
    company: 'Collecty\'form',
    period: '07/2023 - 09/2026',
    location: 'Ile de France, France',
    description:
      "Accompagnement de petites structures dans la création de leur site vitrine et de leurs outils internes. De la découverte du besoin jusqu'à la mise en ligne et la maintenance.",
    tags: ['React','Node.js', 'ExpressJs', 'CSS', 'API REST'],
  },
]
