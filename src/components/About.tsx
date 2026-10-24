import { profile } from '../data/profile'

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="scroll-mt-24"
    >
      <h2 id="about-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
        À propos
      </h2>
      <div className="mt-6 max-w-3xl space-y-4 text-pretty leading-relaxed text-slate-300">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <ul className="mt-8 flex flex-wrap gap-2">
        {profile.skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-slate-800 bg-slate-900 px-3 py-1 text-sm text-slate-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
