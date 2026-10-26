import { profile } from '../data/profile'

export default function About() {
  return (
    <section id="about" aria-labelledby="about-title">
      <h2 id="about-title" className="text-sm font-mono font-normal tracking-tight text-zinc-400">
        À propos
      </h2>
      <div className="mt-6 space-y-4 text-pretty text-zinc-300 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-white">
        {profile.bio.map((paragraph) => (
          <p key={paragraph} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
        ))}
      </div>
    </section>
  )
}
