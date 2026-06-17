import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './Icons'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-500 mb-3">Great systems don't happen by accident.</p>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] mb-10">
            Let's build yours with
            <br className="hidden sm:block" /> {' '}
            <span className="text-gradient">research, rigour, and craft.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="flex items-center justify-center gap-3"
        >
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
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        <a
          href="mailto:sri.priyanshu2000@gmail.com"
          className="inline-block mt-8 font-mono text-sm text-gray-500 hover:text-purple-600 transition-colors"
        >
          sri.priyanshu2000@gmail.com
        </a>

        <div className="mt-16 pt-8 border-t border-gray-200/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© 2025 Priyanshu Srivastava. Built with React + Tailwind CSS.</p>
          <a href="#hero" className="hover:text-gray-600 transition-colors font-mono">
            back to top ↑
          </a>
        </div>
      </div>
    </section>
  )
}
