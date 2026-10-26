'use client'

import { useState } from 'react'
import { profile } from '../data/profile'
import StarMark from './StarMark'

const links = [
  { label: 'À propos', href: '#about' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
]

export default function Header() {

  const [spinningLogo, setSpinningLogo] = useState(false)

  return (
    <header className="font-mono">
      <div className="mx-auto flex w-full max-w-3xl flex-wrap items-center justify-between gap-3 px-6 pb-4 pt-8">
        <a href="#top" className='flex items-center gap-2 text-sm' onMouseEnter={() => setSpinningLogo(true)} onFocus={() => setSpinningLogo(true)}>
          <StarMark className={`h-5 w-5 ${spinningLogo ? 'motion-safe:animate-spin-logo' : ''}`} onAnimationEnd={() => setSpinningLogo(false)} />
          {profile.url}
        </a>
        <nav aria-label="Navigation principale">
          <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-zinc-400">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-white hover:underline hover:underline-offset-4"
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
