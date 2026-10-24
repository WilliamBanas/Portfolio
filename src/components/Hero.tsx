import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="scroll-mt-24"
    >
      <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
        {profile.role}
      </p>
      <h1
        id="hero-title"
        className="mt-4 text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
      >
        {profile.name}
      </h1>
      <p className="mt-6 max-w-2xl text-pretty text-lg text-slate-300 sm:text-xl">
        {profile.tagline}
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-indigo-400"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-slate-500 hover:text-white"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}
