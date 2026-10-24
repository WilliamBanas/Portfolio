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
    id: 'exp-nova',
    role: 'Développeur Full-Stack',
    company: 'Studio Nova',
    period: '2023 — Aujourd’hui',
    location: 'Paris, France',
    description:
      "Développement de plusieurs applications SaaS pour des clients du secteur culturel. Mise en place d'une architecture React/Node.js, de tests automatisés et d'une CI/CD sur mesure.",
    tags: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'exp-atelier',
    role: 'Développeur Front-End',
    company: 'Atelier Numérique',
    period: '2021 — 2023',
    location: 'Lyon, France',
    description:
      "Refonte d'interfaces e-commerce et création d'un design system partagé. Amélioration des performances et de l'accessibilité sur l'ensemble des parcours d'achat.",
    tags: ['TypeScript', 'React', 'Design System', 'Accessibilité'],
  },
  {
    id: 'exp-freelance',
    role: 'Développeur Freelance',
    company: 'Indépendant',
    period: '2019 — 2021',
    location: 'À distance',
    description:
      "Accompagnement de petites structures dans la création de leur site vitrine et de leurs outils internes. De la découverte du besoin jusqu'à la mise en ligne et la maintenance.",
    tags: ['Next.js', 'Tailwind CSS', 'API REST'],
  },
]
