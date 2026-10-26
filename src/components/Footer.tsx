import { profile } from '../data/profile'
import StarMark from './StarMark'

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 font-mono">
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex flex-col gap-3">
            <StarMark className="h-8 w-8 text-white" />
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-zinc-400 underline underline-offset-4 hover:text-white"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <ul className="flex flex-wrap gap-4 text-sm">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-zinc-300 underline underline-offset-4 hover:text-white"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
