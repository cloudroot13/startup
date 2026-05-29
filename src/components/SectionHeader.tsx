import { motion } from 'framer-motion'
import { fadeUp } from '../utils/motion'

type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
  center?: boolean
}

export function SectionHeader({ eyebrow, title, description, center = false }: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-120px' }}
      className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}
    >
      <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-emerald-300">
        {eyebrow}
      </p>
      <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{description}</p>
    </motion.div>
  )
}
