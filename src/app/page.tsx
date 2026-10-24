import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col overflow-x-clip bg-black text-white"
    >
      <Header />
      <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col gap-16 px-6 py-12 sm:gap-20 sm:py-16">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
