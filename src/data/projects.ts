export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  repo?: string
  demo?: string
}

export const projects: Project[] = [
  {
    id: 'project-taskflow',
    title: 'TaskFlow',
    description:
      "Application collaborative de gestion de tâches avec tableaux kanban, attribution et notifications en temps réel.",
    tags: ['React', 'TypeScript', 'Node.js', 'Socket.io'],
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-catalog',
    title: 'Catalog',
    description:
      "Plateforme de gestion de catalogue produits avec recherche avancée, filtres et import CSV.",
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    repo: '#',
    demo: '#',
  },
  {
    id: 'project-design-system',
    title: 'Design System',
    description:
      "Bibliothèque de composants React documentée et testée, pensée pour être partagée entre plusieurs projets.",
    tags: ['React', 'Tailwind CSS', 'Storybook'],
    repo: '#',
  },
  {
    id: 'project-portfolio',
    title: 'Portfolio',
    description:
      "Ce site personnel, construit avec React, Vite et Tailwind CSS pour présenter mon parcours et mes projets.",
    tags: ['React', 'Vite', 'Tailwind CSS'],
    repo: '#',
    demo: '#',
  },
]
