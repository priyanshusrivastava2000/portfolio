import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const jobs = [
  {
    role: 'Senior AI Engineer',
    company: 'Infosys',
    period: 'Jul 2024 – Sep 2025',
    location: 'Remote',
    bullets: [
      'Built an LLM agentic assistant with RAG backend serving 1,000+ customers, integrating retrieval, reasoning, and tool-use in a production pipeline.',
      'Architected ML pipelines across Kubernetes/GCP — reduced manual investigation time by 25% and improved data quality by 15% across 5,000+ monthly workflows.',
      'Achieved 40% reduction in deployment time across 6 LLM pipeline components by automating CI/CD and standardising containerised delivery.',
    ],
    tags: ['LangChain', 'RAG', 'Kubernetes', 'GCP', 'LLMs', 'FastAPI'],
  },
  {
    role: 'Systems Engineer',
    company: 'Infosys · eBay Platform',
    period: 'Jul 2023 – Jul 2024',
    location: 'On-site',
    bullets: [
      'Managed 200+ platform incidents per quarter with systematic root-cause analysis, reducing recurrence rate by 20%.',
      'Drove 12% improvement in mean time-to-resolution through tooling enhancements and on-call process optimisation.',
    ],
    tags: ['Platform Engineering', 'Incident Management', 'Reliability'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionLabel
          badge="Experience"
          color="amber"
          title="Where I've worked"
          subtitle="Three years shipping AI and platform systems at scale."
          inView={inView}
        />

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-purple-400/60 via-purple-200 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="sm:pl-8 relative"
              >
                {/* Dot */}
                <div className="absolute left-0 top-6 w-2.5 h-2.5 rounded-full bg-purple-500 ring-4 ring-purple-100 hidden sm:block -translate-x-[4px]" />

                <div className="p-6 sm:p-7 rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-md shadow-sm card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-display text-gray-900 font-bold text-lg leading-tight">{job.role}</h3>
                      <p className="text-purple-600 text-sm font-medium">{job.company}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-gray-500 text-sm font-mono">{job.period}</p>
                      <p className="text-gray-400 text-xs">{job.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="text-purple-500 mt-1.5 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-full text-xs bg-purple-50 text-purple-600 border border-purple-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
