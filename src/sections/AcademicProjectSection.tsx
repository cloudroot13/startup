import { motion } from 'framer-motion'
import { CheckCircle2, Presentation, TrendingUp } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { academicSummary, businessModel } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export function AcademicProjectSection() {
  return (
    <section id="projeto" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Apresentação acadêmica"
          title="Uma startup social alinhada ao ODS 1."
          description="Esta área resume a proposta da SkillBridge em formato claro para apresentação em sala: problema, solução, público-alvo, impacto e modelo de sustentabilidade."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {academicSummary.map((item) => {
            const Icon = item.icon
            return (
              <motion.article key={item.title} variants={fadeUp} className="glass rounded-[2rem] p-6">
                <div className="mb-6 grid h-13 w-13 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-500 text-white shadow-[0_0_34px_rgba(59,130,246,0.28)]">
                  <Icon size={26} />
                </div>
                <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-300 text-slate-950">
                <Presentation size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                  Roteiro rápido de fala
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Um resumo para explicar o projeto em poucos minutos.
                </p>
              </div>
            </div>

            <p className="leading-8 text-slate-700 dark:text-slate-200">
              A SkillBridge é uma plataforma social criada para combater a pobreza por
              meio de educação prática, inclusão digital e acesso a oportunidades de
              renda. O usuário informa sua realidade, recebe uma trilha personalizada,
              aprende habilidades de aplicação rápida e encontra microtrabalhos
              compatíveis com seu perfil.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <TrendingUp size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                  Modelo de negocio
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Sustentável sem cobrar de quem mais precisa.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {businessModel.map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl bg-white/8 p-4">
                  <CheckCircle2 className="mt-1 shrink-0 text-emerald-300" size={20} />
                  <p className="leading-7 text-slate-700 dark:text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
