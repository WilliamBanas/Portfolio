import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title">
      <h2
        id="experience-title"
        className="text-sm font-mono font-normal tracking-tight text-zinc-400"
      >
        Expériences
      </h2>
      <ol className="mt-8 divide-y divide-zinc-900">
        {experiences.map((experience) => (
          <li key={experience.id} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg font-semibold">
                {experience.company}
                <span className="font-normal text-zinc-300"> · {experience.role}</span>
              </h3>
              <p className="font-mono text-sm text-zinc-400">{experience.period}</p>
            </div>
            <p className="text-sm text-zinc-400">{experience.location}</p>
            <p className="mt-3 text-pretty text-zinc-200">{experience.description}</p>
            <p className="font-mono mt-3 text-sm text-zinc-400">{experience.tags.join(', ')}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
