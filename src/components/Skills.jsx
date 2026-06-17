import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import SectionLabel from './SectionLabel'

const groups = [
  {
    label: 'Languages',
    color: 'text-blue-700 bg-blue-50 border-blue-200',
    skills: ['Python', 'C++', 'TypeScript', 'Java', 'C#'],
  },
  {
    label: 'ML / AI',
    color: 'text-violet-700 bg-violet-50 border-violet-200',
    skills: ['PyTorch', 'TensorFlow', 'scikit-learn', 'XGBoost', 'Deep Learning', 'Reinforcement Learning', 'RLHF'],
  },
  {
    label: 'LLM Frameworks',
    color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
    skills: ['LangChain', 'LangGraph', 'LlamaIndex', 'Hugging Face', 'RAG', 'Agentic AI', 'Prompt Engineering'],
  },
  {
    label: 'Infrastructure',
    color: 'text-amber-700 bg-amber-50 border-amber-200',
    skills: ['Docker', 'Kubernetes', 'GCP', 'FastAPI'],
  },
  {
    label: 'Data & Retrieval',
    color: 'text-rose-700 bg-rose-50 border-rose-200',
    skills: ['ChromaDB', 'Neo4j', 'Vector Databases', 'Hybrid Search'],
  },
]

function Chip({ label, color }) {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${color} whitespace-nowrap`}>
      {label}
    </span>
  )
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <SectionLabel
          badge="Skills"
          color="emerald"
          title="Technical toolkit"
          subtitle="The languages, frameworks, and infrastructure I reach for to take models from notebook to production."
          inView={inView}
        />

        <div className="space-y-6 mt-14">
          {groups.map(({ label, color, skills }, gi) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
              className="grid sm:grid-cols-[150px_1fr] gap-3 sm:gap-6 items-start p-4 rounded-2xl border border-gray-200/60 bg-white/70 backdrop-blur-md"
            >
              <span className="font-display text-sm font-semibold text-gray-900 pt-1">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <Chip key={skill} label={skill} color={color} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
