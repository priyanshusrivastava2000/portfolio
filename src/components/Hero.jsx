import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mail, ChevronDown } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

const TITLES = [
  'LLMs & Agentic Systems',
  'RAG Pipelines',
  'Reinforcement Learning',
  'LLM Interpretability',
]

function TypewriterText() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const current = TITLES[titleIdx]
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60)
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 35)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setTitleIdx(i => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(timeoutRef.current)
  }, [displayed, deleting, titleIdx])

  return (
    <span className="text-purple-600 font-medium">
      {displayed}
      <span className="animate-type-cursor ml-0.5 inline-block w-0.5 h-4 bg-purple-600 align-middle" />
    </span>
  )
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-3xl text-center"
      >
        <motion.h1
          variants={item}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6"
        >
          <span className="text-gradient">3+ years</span>
          <br />
          <span className="text-gray-900">of building production AI &amp; ML systems</span>
        </motion.h1>

        <motion.p variants={item} className="text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed mb-3">
          I design LLM agents, RAG pipelines, and deep-learning systems — pairing
          research-grade rigour with reliable, real-world deployment.
        </motion.p>

        <motion.div variants={item} className="text-base text-gray-500 mb-8">
          Specialising in <TypewriterText />
        </motion.div>

        <motion.p variants={item} className="text-sm text-gray-400 mb-8">
          Currently researching LLM interpretability · MSc Computer Science, University of Southampton
        </motion.p>

        <motion.div variants={item} className="flex items-center justify-center gap-3">
          <a
            href="https://github.com/priyanshusrivastava2000"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/priyanshu-srivastava-03a1071a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-btn"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
          <a href="mailto:sri.priyanshu2000@gmail.com" className="icon-btn" aria-label="Email">
            <Mail size={18} />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 h-11 px-5 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            Resume
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
      >
        <a href="#about" className="flex flex-col items-center gap-1 hover:text-gray-600 transition-colors">
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}
