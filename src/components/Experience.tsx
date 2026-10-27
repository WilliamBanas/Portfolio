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
              <h3 className="text-lg font-semibold">{experience.company}</h3>
              <p className="font-mono text-sm text-zinc-400">{experience.period}</p>
            </div>
            <p className="flex flex-wrap items-center gap-x-2 font-mono text-sm italic text-zinc-400">
              {experience.role}
              <span aria-hidden="true" className="h-1.25 w-1.25 shrink-0 rounded-full bg-zinc-600" />
              {experience.location}
            </p>
            <p className="mt-3 text-pretty text-zinc-300">{experience.description}</p>
            <p className="font-mono mt-3 text-sm text-zinc-400">{experience.tags.join(', ')}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
