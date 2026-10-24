import { profile } from '../data/profile'
import StarMark from './StarMark'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[55vh] flex-col justify-center"
    >
      <StarMark className="pointer-events-none absolute -right-32 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-y-1/2 select-none text-[#121214] sm:-right-16 sm:h-[34rem] sm:w-[34rem]" />
      <p className="text-sm text-zinc-400">{profile.name}</p>
      <h1
        id="hero-title"
        className="mt-4 text-balance text-5xl font-semibold tracking-tight sm:text-7xl lg:text-8xl"
      >
        Développeur
        <span className="block">Fullstack</span>
      </h1>
    </section>
  )
}
