import { experiences } from '../data/experiences'

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="scroll-mt-24"
    >
      <h2
        id="experience-title"
        className="text-2xl font-semibold tracking-tight sm:text-3xl"
      >
        Expériences
      </h2>
      <ol className="mt-10 space-y-8 border-l border-slate-800 pl-6 sm:pl-8">
        {experiences.map((experience) => (
          <li key={experience.id} className="relative">
            <span
              aria-hidden="true"
              className="absolute left-[-1.94rem] top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-2 border-slate-950 bg-indigo-400 sm:left-[-2.44rem]"
            />
            <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold">
                  {experience.role}
                  <span className="text-slate-400"> · {experience.company}</span>
                </h3>
                <p className="text-sm text-slate-400">{experience.period}</p>
              </div>
              <p className="mt-1 text-sm text-slate-500">{experience.location}</p>
              <p className="mt-4 text-pretty leading-relaxed text-slate-300">
                {experience.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {experience.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </section>
  )
}
