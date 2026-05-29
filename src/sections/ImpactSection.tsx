import { motion } from 'framer-motion'
import { Activity, BarChart3, CircleDollarSign, GraduationCap } from 'lucide-react'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { SectionHeader } from '../components/SectionHeader'
import { impactStats } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

const bars = [
  { label: 'Cursos', value: 88, amount: '64,2k' },
  { label: 'Renda', value: 74, amount: 'R$ 3,8 mi' },
  { label: 'Empregos', value: 69, amount: '12,8k' },
  { label: 'Retenção', value: 81, amount: '81%' },
]

export function ImpactSection() {
  return (
    <section id="impacto" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Impacto social mensurável"
          title="Erradicar pobreza exige renda, dignidade e dados."
          description="A SkillBridge mede cada trilha, cada oportunidade e cada aumento de renda para provar que inclusão digital pode virar mobilidade social."
          center
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {impactStats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} decimals={stat.value % 1 === 0 ? 0 : 1} />
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-7">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Gráfico de impacto</h3>
                <p className="text-slate-600 dark:text-slate-300">Evolução simulada do piloto social.</p>
              </div>
              <Activity className="text-cyan-300" size={28} />
            </div>
            <div className="relative h-80 rounded-3xl border border-white/20 bg-black p-5">
              <div className="absolute inset-x-5 bottom-16 top-5 grid grid-rows-4">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="border-t border-white/10" />
                ))}
              </div>
              <div className="relative z-10 grid h-full grid-cols-4 items-end gap-3 pb-12">
              {bars.map((bar) => (
                <div key={bar.label} className="flex h-full flex-col justify-end">
                  <div className="mb-3 text-center">
                    <strong className="block text-sm font-black text-yellow-300">{bar.amount}</strong>
                    <span className="text-xs font-bold text-white/70">{bar.value}%</span>
                  </div>
                  <div className="flex h-52 items-end rounded-t-3xl bg-white/8 p-1">
                    <motion.div
                      initial={{ height: 0 }}
                      whileInView={{ height: `${bar.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: 'easeOut' }}
                      className="w-full rounded-t-2xl bg-gradient-to-t from-yellow-300 via-white to-yellow-100 shadow-[0_0_28px_rgba(250,204,21,0.34)]"
                    />
                  </div>
                  <span className="mt-3 text-center text-xs font-black uppercase tracking-[0.12em] text-white">
                    {bar.label}
                  </span>
                </div>
              ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-5 md:grid-cols-2">
            {[
              {
                title: 'Aprendizado aplicado',
                text: 'Cursos são conectados a tarefas reais e portfólio.',
                icon: GraduationCap,
              },
              {
                title: 'Renda rastreável',
                text: 'Relatórios mostram renda gerada por comunidade.',
                icon: CircleDollarSign,
              },
              {
                title: 'Dados para parceiros',
                text: 'Empresas visualizam impacto antes de investir.',
                icon: BarChart3,
              },
              {
                title: 'Escala responsável',
                text: 'A plataforma prioriza segurança, inclusão e permanência.',
                icon: Activity,
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="glass rounded-3xl p-6">
                  <Icon className="mb-5 text-violet-300" size={28} />
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
