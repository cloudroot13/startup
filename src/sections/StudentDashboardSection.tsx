import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2, Download, Flame, Target, WalletCards } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { studentPath, studentProfile, studentTasks } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export function StudentDashboardSection() {
  return (
    <section id="dashboard" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Experiencia do aluno"
          title="Um painel simples para transformar estudo em renda."
          description="A SkillBridge nao mostra apenas cursos. Ela organiza prioridades, recomenda tarefas pequenas e aproxima o aluno de oportunidades reais."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-14 grid gap-6 xl:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.aside variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5">
              <div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-emerald-300">
                  {studentProfile.level}
                </span>
                <h3 className="mt-5 text-3xl font-black text-slate-950 dark:text-white">
                  {studentProfile.name}
                </h3>
                <p className="mt-3 max-w-sm leading-7 text-slate-600 dark:text-slate-300">
                  {studentProfile.goal}
                </p>
              </div>
              <div className="grid h-16 w-16 place-items-center rounded-3xl bg-gradient-to-br from-sky-400 to-violet-600 text-2xl font-black text-white shadow-[0_0_42px_rgba(59,130,246,0.42)]">
                MA
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/10 p-5">
                <WalletCards className="mb-4 text-emerald-300" size={25} />
                <span className="text-sm text-slate-500 dark:text-slate-300">Meta de renda</span>
                <strong className="mt-1 block text-3xl font-black text-slate-950 dark:text-white">
                  {studentProfile.incomeGoal}
                </strong>
              </div>
              <div className="rounded-3xl bg-white/10 p-5">
                <Target className="mb-4 text-cyan-300" size={25} />
                <span className="text-sm text-slate-500 dark:text-slate-300">Tempo disponivel</span>
                <strong className="mt-1 block text-3xl font-black text-slate-950 dark:text-white">
                  {studentProfile.weeklyTime}
                </strong>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-950/70 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-black text-white">Pronta para oportunidades</span>
                <span className="text-sm font-black text-emerald-300">{studentProfile.readiness}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${studentProfile.readiness}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300"
                />
              </div>
            </div>
          </motion.aside>

          <motion.div variants={fadeUp} className="grid gap-6">
            <div className="glass rounded-[2rem] p-6 md:p-8">
              <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">Plano dos proximos 7 dias</h3>
                  <p className="text-slate-600 dark:text-slate-300">Pequenas acoes, resultado visivel.</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950">
                  <Flame size={16} /> Sequencia 5 dias
                </span>
              </div>

              <div className="grid gap-3">
                {studentTasks.map((task) => {
                  const Icon = task.icon
                  return (
                    <motion.div
                      key={task.title}
                      whileHover={{ x: 6 }}
                      className="grid gap-4 rounded-3xl border border-white/10 bg-white/8 p-4 sm:grid-cols-[auto_1fr_auto]"
                    >
                      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white/10 text-cyan-300">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-950 dark:text-white">{task.title}</h4>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                          {task.time} • {task.status}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-4 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                      >
                        Abrir <ArrowUpRight size={16} />
                      </button>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr]">
              <div className="glass rounded-[2rem] p-6">
                <h3 className="text-xl font-black text-slate-950 dark:text-white">Trilha de progresso</h3>
                <div className="mt-6 grid gap-5">
                  {studentPath.map((item) => (
                    <div key={item.label}>
                      <div className="mb-2 flex justify-between text-sm font-bold text-slate-500 dark:text-slate-300">
                        <span>{item.label}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.9, ease: 'easeOut' }}
                          className="h-full rounded-full bg-gradient-to-r from-sky-300 to-violet-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="glass rounded-[2rem] p-6">
                <Download className="mb-5 text-emerald-300" size={28} />
                <h3 className="text-xl font-black text-slate-950 dark:text-white">Modo offline</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  Aulas curtas e tarefas essenciais podem ficar salvas no celular para estudar sem internet.
                </p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
                  <CheckCircle2 size={16} /> Pronto para PWA
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
