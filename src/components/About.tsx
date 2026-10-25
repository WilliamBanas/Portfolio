import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="text-sm font-mono font-normal tracking-tight text-zinc-400">
        À propos
      </h2>
      <div className="mt-6 space-y-4 text-pretty text-zinc-200 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-white">
        {profile.bio.map((paragraph) => (
          <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
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
    </section>
  )
}
