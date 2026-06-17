import { motion } from 'framer-motion'

/**
 * Centered pill badge + heading + optional subtitle — the recurring
 * section header pattern used across the site.
 */
export default function SectionLabel({ badge, color = 'violet', title, subtitle, align = 'center', inView }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className={`flex flex-col gap-4 ${alignment}`}
    >
      <span className={`badge badge-${color}`}>{badge}</span>
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p className={`text-gray-500 leading-relaxed max-w-xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
