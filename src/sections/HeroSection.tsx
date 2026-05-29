import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, BadgeCheck, BookOpen, BriefcaseBusiness, Play } from 'lucide-react'
import { dashboardMetrics } from '../data/siteData'
import { PrimaryButton } from '../components/PrimaryButton'
import { fadeUp, staggerContainer } from '../utils/motion'

export function HeroSection() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 120])
  const rotate = useTransform(scrollY, [0, 700], [0, -7])

  return (
    <section id="inicio" className="relative isolate min-h-screen overflow-hidden px-4 pb-20 pt-32 md:pt-44">
      <motion.div
        aria-hidden="true"
        className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"
        animate={{ scale: [1, 1.22, 1], opacity: [0.4, 0.72, 0.4] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div
            variants={fadeUp}
            className="glass mb-7 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold text-slate-700 dark:text-slate-200"
          >
            <BadgeCheck size={17} className="text-emerald-300" />
            Inspirado no ODS 1 da ONU: erradicar a pobreza
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="max-w-5xl text-4xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-5xl md:text-7xl lg:text-8xl dark:text-white"
          >
            Transformando conhecimento em oportunidade.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl dark:text-slate-300"
          >
            Uma plataforma social que acelera a renda de pessoas de baixa renda com
            cursos curtos, microtrabalhos verificados e conexoes profissionais orientadas
            por impacto.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#cta">
              Comecar Agora <ArrowRight size={18} />
            </PrimaryButton>
            <PrimaryButton href="#cursos" variant="secondary">
              <Play size={18} /> Explorar Cursos
            </PrimaryButton>
          </motion.div>
        </motion.div>

        <motion.div style={{ y, rotate }} className="relative">
          <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-emerald-400/20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2rem] p-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm text-slate-400">Painel SkillBridge</p>
                  <h3 className="text-xl font-black text-white">Trilha para renda</h3>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black text-emerald-200">
                  Ao vivo
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {dashboardMetrics.map((metric) => {
                  const Icon = metric.icon
                  return (
                    <div key={metric.label} className="rounded-2xl bg-white/[0.06] p-4">
                      <Icon size={20} className="mb-4 text-cyan-200" />
                      <strong className="block text-2xl font-black text-white">{metric.value}</strong>
                      <span className="text-xs text-slate-400">{metric.label}</span>
                    </div>
                  )
                })}
              </div>

              <div className="mt-5 rounded-3xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                    <BookOpen size={22} />
                  </div>
                  <div>
                    <h4 className="font-black text-white">Programacao para freelas</h4>
                    <p className="text-sm text-slate-300">82% concluido, 3 oportunidades prontas</p>
                  </div>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '82%' }}
                    transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {['Mentoria liberada', 'Primeiro freela recomendado', 'Portfolio em revisao'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl bg-white/[0.05] px-4 py-3"
                    >
                      <span className="text-sm font-bold text-slate-200">{item}</span>
                      <BriefcaseBusiness size={17} className="text-emerald-300" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
