import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Brain, Cpu, FlaskConical } from 'lucide-react'

const highlights = [
  { icon: Brain, label: 'Agentic AI', detail: 'LLM agents, multi-tool orchestration, RAG pipelines', color: 'violet' },
  { icon: Cpu, label: 'Production ML', detail: 'Kubernetes, GCP, FastAPI, Docker', color: 'blue' },
  { icon: FlaskConical, label: 'Research', detail: 'LLM interpretability, NLP, computer vision', color: 'emerald' },
]

const iconTint = {
  violet: 'bg-violet-100 text-violet-600',
  blue: 'bg-blue-100 text-blue-600',
  emerald: 'bg-emerald-100 text-emerald-600',
}

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="flex justify-center mb-14">
          <span className="badge badge-blue">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-gray-200/70 bg-gradient-to-br from-purple-50 via-white to-fuchsia-50 shadow-sm"
          >
            <img
              src="/profile.jpg"
              alt="Priyanshu Srivastava"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </motion.div>

          {/* Text — frosted panel so the copy never submerges into the background */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl border border-gray-200/70 bg-white/80 backdrop-blur-md shadow-sm p-6 sm:p-8"
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
              Built in production.<br />
              Sharpened by research.<br />
              Driven by curiosity.
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                I'm an AI/ML engineer with three years of hands-on production experience spanning
                LLM agentic systems, RAG pipelines, and reinforcement learning. At Infosys, I
                architected an LLM assistant serving over 1,000 customers and built ML pipelines on
                Kubernetes/GCP that cut manual investigation time by 25%.
              </p>
              <p>
                My work sits at the intersection of research and engineering — I care as much about
                whether a model generalises as whether it deploys reliably. Now completing my MSc at
                the University of Southampton, I'm researching LLM interpretability using sparse
                autoencoders to probe residual-stream features in Gemma.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-14">
          {highlights.map(({ icon: Icon, label, detail, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="p-5 rounded-2xl border border-gray-200/70 bg-white/70 backdrop-blur-md shadow-sm card-hover"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconTint[color]}`}>
                  <Icon size={16} />
                </div>
                <span className="font-display font-semibold text-gray-900 text-sm">{label}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">{detail}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
