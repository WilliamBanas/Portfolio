import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-slate-800/60">
      <div className="mx-auto w-full max-w-5xl px-6 py-16">
        <div className="flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Contact
            </h2>
            <p className="mt-3 max-w-md text-pretty text-slate-300">
              Une question, un projet ou simplement envie d’échanger ? Écris-moi.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-4 inline-block font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              {profile.email}
            </a>
          </div>
          <div className="flex flex-col gap-3 sm:items-end">
            <ul className="flex flex-wrap gap-4 text-sm font-medium">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="text-slate-400 transition-colors hover:text-indigo-300"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} {profile.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
