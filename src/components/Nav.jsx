import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive('#' + e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => s && observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
      <div
        className={`max-w-5xl mx-auto flex items-center justify-between transition-all duration-300 rounded-2xl px-3 sm:px-4 h-14 ${
          scrolled
            ? 'nav-blur bg-white/80 border border-gray-200/80 shadow-[0_8px_30px_rgba(17,24,39,0.06)]'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Logo box */}
        <a
          href="#hero"
          className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 bg-white font-display font-bold text-gray-900 text-sm shadow-sm hover:border-purple-300 hover:text-purple-600 transition-colors"
          aria-label="Home"
        >
          PS
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                active === l.href
                  ? 'text-purple-600 bg-purple-50'
                  : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100/70'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="ml-1 px-4 py-1.5 rounded-lg text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 nav-blur bg-white/90 border border-gray-200/80 rounded-2xl shadow-lg px-3 py-3 flex flex-col gap-1">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-100/70 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-medium bg-gray-900 text-white text-center hover:bg-gray-800 transition-colors"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  )
}
