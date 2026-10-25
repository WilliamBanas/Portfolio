import { profile } from '../data/profile'
import HeroStar from './HeroStar'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-[55vh] flex-col justify-center"
    >
      <HeroStar />
      <p className="text-sm text-zinc-400 font-mono">{profile.name}</p>
      <h1
        id="hero-title"
        className="mt-4 text-balance text-5xl font-normal tracking-tight sm:text-6xl lg:text-[5rem]"
      >
        Développeur
        <span className="block">Fullstack</span>
      </h1>
    </section>
  )
}
