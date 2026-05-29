import { motion } from 'framer-motion'
import { AlertTriangle, GraduationCap, WifiOff } from 'lucide-react'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { SectionHeader } from '../components/SectionHeader'
import { aboutStats, timeline } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

const problems = [
  {
    title: 'Pobreza persistente',
    text: 'Sem renda previsivel, estudar vira um luxo e oportunidades chegam tarde.',
    icon: AlertTriangle,
  },
  {
    title: 'Educacao inacessivel',
    text: 'Cursos longos e caros afastam quem precisa aprender e ganhar rapidamente.',
    icon: GraduationCap,
  },
  {
    title: 'Exclusao digital',
    text: 'A falta de orientação transforma tecnologia em barreira, não em ponte.',
    icon: WifiOff,
  },
]

export function AboutSection() {
  return (
    <section id="sobre" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Problema e solucao"
          title="A pobreza também é uma crise de acesso."
          description="A SkillBridge combina aprendizado prático, conexões profissionais e oportunidades de renda rápida para reduzir desigualdades com tecnologia humana e mensurável."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {aboutStats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-16 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="grid gap-4">
            {problems.map((problem) => {
              const Icon = problem.icon
              return (
                <motion.article key={problem.title} variants={fadeUp} className="glass rounded-3xl p-6">
                  <Icon className="mb-5 text-cyan-300" size={28} />
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{problem.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{problem.text}</p>
                </motion.article>
              )
            })}
          </div>

          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <p className="mb-8 text-sm font-bold uppercase tracking-[0.28em] text-emerald-300">
              Jornada SkillBridge
            </p>
            <div className="relative grid gap-8">
              <div className="absolute left-6 top-8 h-[calc(100%-4rem)] w-px bg-gradient-to-b from-cyan-300 via-violet-300 to-emerald-300" />
              {timeline.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="relative flex gap-5">
                    <div className="z-10 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-slate-950 text-cyan-200 shadow-[0_0_28px_rgba(34,211,238,0.32)] dark:bg-white/10">
                      <Icon size={21} />
                    </div>
                    <div>
                      <span className="text-sm font-black text-violet-300">0{index + 1}</span>
                      <h3 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                      <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
