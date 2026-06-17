import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Fixed signature background — consistent across the whole page while
          content scrolls and animates over it */}
      <div className="fixed inset-0 -z-10" aria-hidden="true">
        <img
          src="/signature-bg.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Soft scrim keeps the scrolling content readable while letting the
            purple signature + warm paper texture show through */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(75rem 60rem at 50% 30%, rgba(252,251,253,0.84) 0%, rgba(252,251,253,0.80) 45%, rgba(252,251,253,0.74) 100%)',
          }}
        />
        {/* Faint purple brand wash for cohesion */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(40rem 40rem at 8% 0%, rgba(147,51,234,0.05), transparent 60%), radial-gradient(40rem 40rem at 100% 100%, rgba(219,39,119,0.04), transparent 60%)',
          }}
        />
      </div>

      <Nav />
      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  )
}

export default App
