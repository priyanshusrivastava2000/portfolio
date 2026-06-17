import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { GraduationCap } from 'lucide-react'
import SectionLabel from './SectionLabel'

const degrees = [
  {
    degree: 'MSc Computer Science',
    institution: 'University of Southampton',
    period: '2025 – present',
    location: 'Southampton, UK',
    focus: ['Reinforcement Learning', 'Natural Language Processing', 'Deep Learning'],
    note: 'Research focus on LLM interpretability and sparse autoencoders.',
  },
  {
    degree: 'BTech Computer Science',
    institution: 'Shri Mata Vaishno Devi University',
    period: '2019 – 2023',
    location: 'India',
    focus: ['Machine Learning', 'Algorithms', 'Data Structures'],
    note: 'Graduated in top 15% of a cohort of 120.',
  },
]

export default function Education() {
  const [ref, inView] = useInView()

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionLabel
          badge="Education"
          color="rose"
          title="Academic background"
          inView={inView}
        />

        <div className="grid md:grid-cols-2 gap-6 mt-14">
          {degrees.map((d, i) => (
            <motion.div
              key={d.institution}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="p-6 rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-md shadow-sm card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-2xl bg-rose-100 flex items-center justify-center shrink-0">
                  <GraduationCap size={18} className="text-rose-600" />
                </div>
                <div>
                  <h3 className="font-display text-gray-900 font-bold text-base leading-tight">{d.degree}</h3>
                  <p className="text-rose-600 text-sm">{d.institution}</p>
                  <p className="text-gray-400 text-xs font-mono mt-0.5">{d.period} · {d.location}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-3">
                {d.focus.map(f => (
                  <span
                    key={f}
                    className="px-2.5 py-0.5 rounded-full text-xs bg-rose-50 text-rose-600 border border-rose-100"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <p className="text-xs text-gray-500 leading-relaxed">{d.note}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
