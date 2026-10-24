import { profile } from '../data/profile'

const links = [
  { label: 'Accueil', href: '#hero' },
  { label: 'À propos', href: '#about' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-4">
        <a
          href="#top"
          className="text-lg font-semibold tracking-tight transition-colors hover:text-indigo-300"
        >
          {profile.name}
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium text-slate-400 sm:gap-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="transition-colors hover:text-indigo-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
