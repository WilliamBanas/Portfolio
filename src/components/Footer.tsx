import { profile } from '../data/profile'
import StarMark from './StarMark'

export default function Footer() {
  return (
    <footer id="contact" className="mt-12 font-mono ">
      <div className="mx-auto w-full max-w-3xl px-6 py-8 ">
        <div className="flex w-full items-center justify-between gap-5 border-t border-white/10 pt-4">
          <StarMark className="h-8 w-8 shrink-0 text-white" />
          <ul className="flex items-start gap-2 text-right text-sm">
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
        </div>
        <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p>
            {profile.location} ·{' '}
            <a href="#top" className="underline underline-offset-4 hover:text-white">
              Haut de page
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
