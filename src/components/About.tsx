import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
        À propos
      </h2>
      <div className="mt-6 space-y-4 text-pretty text-zinc-200">
        {profile.bio.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <dl className="mt-8 space-y-1 text-sm">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="flex flex-wrap gap-x-2">
            <dt className="text-zinc-400">{stat.label} :</dt>
            <dd className="text-zinc-200">{stat.value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-8 text-zinc-200">{profile.skills.join(', ')}</p>
    </section>
  )
}
