import { projects } from '../data/projects'

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="scroll-mt-24"
    >
      <h2 id="projects-title" className="text-2xl font-semibold tracking-tight sm:text-3xl">
        Projets
      </h2>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 flex-1 text-pretty leading-relaxed text-slate-300">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-300"
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-4 text-sm font-medium">
              {project.repo && (
                <a
                  href={project.repo}
                  className="text-indigo-400 transition-colors hover:text-indigo-300"
                >
                  Code source
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  className="text-indigo-400 transition-colors hover:text-indigo-300"
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
