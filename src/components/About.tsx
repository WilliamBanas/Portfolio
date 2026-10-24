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
      <div className="mt-6 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <div className="max-w-3xl space-y-4 text-pretty leading-relaxed text-slate-300">
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
        </div>
        <dl className="grid grid-cols-3 gap-3 sm:gap-4">
          {profile.stats.map((stat) => (
            <div
              key={stat.label}
              className="flex min-h-40 flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:min-h-44 sm:p-5"
            >
              <dt className="order-2 text-center text-xs text-slate-400 sm:text-sm">
                {stat.label}
              </dt>
              <dd className="order-1 flex flex-1 items-center justify-center text-center text-lg font-semibold leading-tight sm:text-xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
