export type SocialLink = {
  label: string
  href: string
}

export type ProfileStat = {
  label: string
  value: string
}

export const profile = {
  name: 'Alex Martin',
  role: 'Développeur Full-Stack',
  tagline:
    "Je conçois des applications web robustes et accessibles, du prototype à la mise en production.",
  bio: [
    "Développeur full-stack basé à Paris, je travaille principalement avec React, TypeScript et Node.js. J'aime transformer des besoins métier complexes en interfaces simples et en APIs maintenables.",
    "Curieux et attaché à la qualité du code, je m'intéresse aussi bien à l'architecture qu'à l'expérience utilisateur. J'interviens sur l'ensemble du cycle de vie d'un produit, de la conception au suivi en production.",
  ],
  email: 'hello@example.com',
  location: 'Paris, France',
  socials: [
    { label: 'GitHub', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],
  skills: [
    'React',
    'TypeScript',
    'Node.js',
    'Tailwind CSS',
    'PostgreSQL',
    'Docker',
    'Git',
    'Accessibilité',
  ],
  stats: [
    { label: "Années d'expérience", value: '7+' },
    { label: 'Localisation', value: 'Paris, France' },
    { label: 'Disponibilité', value: 'Ouvert aux missions' },
  ],
} satisfies {
  name: string
  role: string
  tagline: string
  bio: string[]
  email: string
  location: string
  socials: SocialLink[]
  skills: string[]
  stats: ProfileStat[]
}
