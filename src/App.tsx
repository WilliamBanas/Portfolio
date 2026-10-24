import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div
      id="top"
      className="flex min-h-screen flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30"
    >
      <Header />
      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-20 px-6 py-16 sm:gap-28 sm:py-24">
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
