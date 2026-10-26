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
    id: 'project-deathroll',
    title: 'Deathroll',
    description:
      "Mini-jeu multijoueur en ligne.",
    tags: ['NextJs', 'TypeScript', 'Node.js', 'WebSocket'],
  },
  {
    id: 'project-makistador',
    title: 'Makistador',
    description:
      "Application permettant de proposer la carte d’un restaurant fictif.",
    tags: ['React','TypeScript', 'NestJS', 'Node.js', 'Prisma', 'TalwindCSS'],
  },
  {
    id: 'project-ksp',
    title: 'Kepler Space Lab',
    description:
     'Application de visualisation du système solaire en 3d.',
    tags: ['TypeScript', 'NextJs', 'Node.js', 'ThreeJS', 'PostgreSQL'],
  },
  {
    id: 'project-my-spotify',
    title: 'My Spotify',
    description:
      "Application permettant de consulter ses artistes et musiques favoris.",
    tags: ['JavaScript', 'CSS', 'Spotify API'],
  },
  {
    id: 'project-portfolio',
    title: 'Portfolio',
    description:
      "Ce site personnel, pour présenter mon parcours et mes projets.",
    tags: ['NextJs', 'TailwindCSS'],
  },
]
