import { profile } from '../data/profile'

export default function Footer() {
  return (
    <footer id="contact">
      <div className="mx-auto w-full max-w-3xl px-6 py-8">
        <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-4 hover:text-zinc-300"
          >
            {profile.email}
          </a>
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
