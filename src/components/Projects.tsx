import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-sm font-mono font-normal tracking-tight text-zinc-400">
        Projets
      </h2>
      <ul className="mt-8 divide-y divide-zinc-800">
        {projects.map((project) => (
          <li key={project.id} className="py-4 first:pt-0 last:pb-0">
            <div className="flex flex-col gap-y-1 sm:flex-row sm:items-baseline sm:gap-x-4 sm:gap-y-0">
              <h3 className="shrink-0 text-lg font-semibold">{project.title}</h3>
              <p className="text-pretty text-zinc-200">{project.description}</p>
            </div>
            <div className="mt-2">
              <p className="font-mono text-sm text-zinc-400">{project.tags.join(', ')}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
