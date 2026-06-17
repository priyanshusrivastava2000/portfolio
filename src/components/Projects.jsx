import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './Icons'
import SectionLabel from './SectionLabel'

const projects = [
  {
    name: 'Hospital Triage Assistant',
    headline: 'Medical Q&A grounded in a knowledge graph',
    pitch: 'A LangChain + Neo4j agent that answers questions about hospitals, physicians, patient reviews, wait times, and insurance — grounded in a medical knowledge graph.',
    bullets: [
      'Conversational agent over a Neo4j medical knowledge graph — answers hospital info, physician details, patient reviews, wait times, and insurance/payer queries.',
      'LangChain tool-calling with multi-hop graph reasoning, so every answer is grounded in real data rather than free-form generation.',
      'Streamlit front-end with an About panel and live system-status indicators; packaged for one-click deploy.',
    ],
    tags: ['LangChain', 'Neo4j', 'Knowledge Graph', 'RAG', 'Streamlit', 'Python'],
    github: 'https://github.com/priyanshusrivastava2000',
    image: '/projects/triage-assistant.png',
    tint: {
      card: 'bg-rose-50/80 border-rose-100',
      window: 'from-rose-100/60 to-white',
      dot: 'bg-rose-300',
      marker: 'text-rose-500',
      tag: 'bg-rose-100 text-rose-700 border-rose-200',
    },
  },
  {
    name: 'Sparse Autoencoder Probing',
    headline: 'Looking inside the black box',
    pitch: 'LLM interpretability research extracting and classifying residual-stream features from Gemma, extended to vision models.',
    bullets: [
      'Trained sparse autoencoders on Gemma activations to surface monosemantic features across 160+ tasks.',
      'Extended the probing pipeline to vision models, showing cross-modal applicability of the SAE approach.',
      'Compared feature geometry across layers to map where task-relevant information is encoded.',
    ],
    tags: ['PyTorch', 'Hugging Face', 'Gemma', 'Interpretability', 'NLP', 'Vision'],
    github: 'https://github.com/priyanshusrivastava2000',
    image: '/projects/sae.png',
    tint: {
      card: 'bg-amber-50/80 border-amber-100',
      window: 'from-amber-100/60 to-white',
      dot: 'bg-amber-300',
      marker: 'text-amber-500',
      tag: 'bg-amber-100 text-amber-800 border-amber-200',
    },
  },
]

function ProjectCard({ p, i, inView }) {
  const [imgOk, setImgOk] = useState(true)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.12 }}
      className="group"
    >
      {/* Pastel showcase card */}
      <div className={`rounded-[1.75rem] border ${p.tint.card} backdrop-blur-md px-6 sm:px-10 pt-10 overflow-hidden`}>
        <h3 className="font-display text-2xl sm:text-4xl font-extrabold text-gray-900 text-center mb-8 leading-tight">
          {p.headline}
        </h3>

        {imgOk ? (
          /* Real screenshot — already a self-contained window, rises from the card bottom */
          <div className="mx-auto max-w-3xl rounded-t-2xl overflow-hidden shadow-[0_-2px_40px_rgba(17,24,39,0.08)] ring-1 ring-black/5">
            <img
              src={p.image}
              alt={`${p.name} preview`}
              className="block w-full h-auto"
              onError={() => setImgOk(false)}
            />
          </div>
        ) : (
          /* Fallback faux window when no screenshot is available yet */
          <div className="relative mx-auto max-w-2xl rounded-t-2xl border border-gray-200/80 border-b-0 bg-white shadow-[0_-2px_40px_rgba(17,24,39,0.06)] overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 h-9 border-b border-gray-100 bg-gray-50/80">
              <span className={`w-2.5 h-2.5 rounded-full ${p.tint.dot}`} />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
              <span className="w-2.5 h-2.5 rounded-full bg-gray-200" />
            </div>
            <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.tint.window}`}>
              <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                <p className="font-display text-base sm:text-lg font-semibold text-gray-700/80 max-w-md">
                  {p.pitch}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Meta panel below the card — frosted surface so text never submerges
          into the page background */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mt-4 rounded-2xl border border-gray-200/70 bg-white/80 backdrop-blur-md shadow-sm p-5 sm:p-6">
        <div className="max-w-xl">
          <h4 className="font-display text-xl font-bold text-gray-900 mb-2">{p.name}</h4>
          <ul className="space-y-2">
            {p.bullets.map((b, bi) => (
              <li key={bi} className="flex gap-2.5 text-sm text-gray-700 leading-relaxed">
                <span className={`${p.tint.marker} mt-0.5 shrink-0 font-bold`}>▸</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {p.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1 rounded-full text-xs font-semibold border ${p.tint.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 self-start shrink-0 px-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-medium text-gray-700 shadow-sm hover:border-purple-300 hover:text-purple-600 hover:-translate-y-0.5 transition-all duration-200"
        >
          <GithubIcon size={15} />
          View on GitHub
          <ArrowUpRight size={14} />
        </a>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const [ref, inView] = useInView()

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <SectionLabel
          badge="Selected Work"
          color="violet"
          title="Selected work"
          subtitle="Exploring real problems and building systems that ship — from healthcare assistants to interpretability research."
          inView={inView}
        />

        <div className="space-y-20 mt-16">
          {projects.map((p, i) => (
            <ProjectCard key={p.name} p={p} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
