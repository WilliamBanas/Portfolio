import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title">
      <h2 id="projects-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projets
      </h2>
      <ul className="mt-8 divide-y divide-zinc-800">
        {projects.map((project) => (
          <li key={project.id} className="py-6 first:pt-0 last:pb-0">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-pretty text-zinc-200">{project.description}</p>
            <p className="mt-2 text-sm text-zinc-400">{project.tags.join(', ')}</p>
            <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {project.repo && (
                <a
                  href={project.repo}
                  className="underline underline-offset-4 hover:text-zinc-300"
                >
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="underline underline-offset-4 hover:text-zinc-300"
                >
                  Démo
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
