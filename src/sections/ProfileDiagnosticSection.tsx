import { motion } from 'framer-motion'
import { ArrowRight, BrainCircuit, CheckCircle2, Gauge, Signal, Target, Timer } from 'lucide-react'
import { useMemo } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { profileOptions, recommendationMap } from '../data/siteData'
import { useLocalStorageState } from '../hooks/useLocalStorageState'
import { fadeUp, staggerContainer } from '../utils/motion'

type ProfileState = {
  incomeGoal: string
  weeklyTime: string
  internetAccess: string
  skillBase: string
}

const initialProfile: ProfileState = {
  incomeGoal: profileOptions.incomeGoal[1],
  weeklyTime: profileOptions.weeklyTime[1],
  internetAccess: profileOptions.internetAccess[0],
  skillBase: profileOptions.skillBase[1],
}

export function ProfileDiagnosticSection() {
  const [profile, setProfile] = useLocalStorageState<ProfileState>(
    'skillbridge:diagnostic-profile',
    initialProfile,
  )

  const recommendation = useMemo(() => {
    if (profile.weeklyTime === '8h+' && profile.skillBase === 'Já fiz trabalhos digitais') {
      return recommendationMap.tech
    }

    if (profile.skillBase === 'Começando do zero' || profile.internetAccess === 'Limitado') {
      return recommendationMap.fastIncome
    }

    return recommendationMap.creative
  }, [profile])

  const readiness = useMemo(() => {
    const timeScore = profile.weeklyTime === '8h+' ? 30 : profile.weeklyTime === '5h' ? 22 : 14
    const internetScore =
      profile.internetAccess === 'Bom' ? 28 : profile.internetAccess === 'Regular' ? 20 : 12
    const skillScore =
      profile.skillBase === 'Já fiz trabalhos digitais'
        ? 28
        : profile.skillBase === 'Sei usar celular'
          ? 20
          : 12

    return Math.min(96, timeScore + internetScore + skillScore + 10)
  }, [profile])

  const updateProfile = (key: keyof ProfileState, value: string) => {
    setProfile((current) => ({ ...current, [key]: value }))
  }

  const resetProfile = () => {
    setProfile(initialProfile)
  }

  return (
    <section id="diagnostico" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Diagnóstico inteligente"
          title="A trilha certa começa entendendo a realidade do aluno."
          description="O perfil socioeconômico ajuda a SkillBridge recomendar cursos, tarefas offline e oportunidades compatíveis com tempo, internet e objetivo de renda."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.9fr]"
        >
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300 text-slate-950">
                <BrainCircuit size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">
                  Perfil inicial
                </h3>
                <p className="text-slate-600 dark:text-slate-300">Simulação para recomendar uma trilha.</p>
              </div>
            </div>

            <div className="grid gap-6">
              <OptionGroup
                icon={Target}
                label="Objetivo de renda"
                options={profileOptions.incomeGoal}
                value={profile.incomeGoal}
                onChange={(value) => updateProfile('incomeGoal', value)}
              />
              <OptionGroup
                icon={Timer}
                label="Tempo disponível por semana"
                options={profileOptions.weeklyTime}
                value={profile.weeklyTime}
                onChange={(value) => updateProfile('weeklyTime', value)}
              />
              <OptionGroup
                icon={Signal}
                label="Acesso a internet"
                options={profileOptions.internetAccess}
                value={profile.internetAccess}
                onChange={(value) => updateProfile('internetAccess', value)}
              />
              <OptionGroup
                icon={Gauge}
                label="Experiencia atual"
                options={profileOptions.skillBase}
                value={profile.skillBase}
                onChange={(value) => updateProfile('skillBase', value)}
              />
            </div>
            <button
              type="button"
              onClick={resetProfile}
              className="mt-7 inline-flex w-full items-center justify-center rounded-2xl bg-white/10 px-4 py-3 font-black text-slate-950 transition hover:bg-yellow-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 dark:text-white"
            >
              Restaurar perfil ficticio
            </button>
          </motion.div>

          <motion.aside variants={fadeUp} className="glass rounded-[2rem] p-6 md:p-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
              <CheckCircle2 size={17} /> Recomendacao gerada
            </span>

            <h3 className="mt-7 text-3xl font-black tracking-tight text-slate-950 md:text-4xl dark:text-white">
              {recommendation.title}
            </h3>
            <p className="mt-4 leading-8 text-slate-600 dark:text-slate-300">
              {recommendation.description}
            </p>

            <div className="mt-8 rounded-3xl bg-slate-950/75 p-5">
              <div className="mb-3 flex items-center justify-between text-white">
                <span className="font-black">Compatibilidade</span>
                <span className="text-emerald-300">{recommendation.match}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={recommendation.title}
                  initial={{ width: 0 }}
                  animate={{ width: `${recommendation.match}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-blue-400 to-emerald-300"
                />
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-white/8 p-5">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-black text-slate-950 dark:text-white">Prontidão digital</span>
                <span className="font-black text-cyan-300">{readiness}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full bg-slate-900/10 dark:bg-white/10">
                <motion.div
                  key={readiness}
                  initial={{ width: 0 }}
                  animate={{ width: `${readiness}%` }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-violet-300 to-cyan-300"
                />
              </div>
            </div>

            <a
              href="#dashboard"
              className="shine mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-400 via-blue-500 to-violet-600 px-5 py-4 font-black text-white shadow-[0_0_36px_rgba(59,130,246,0.34)] transition hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Ver painel recomendado <ArrowRight size={18} />
            </a>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  )
}

type OptionGroupProps = {
  icon: typeof Target
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function OptionGroup({ icon: Icon, label, options, value, onChange }: OptionGroupProps) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <Icon size={18} className="text-cyan-300" />
        <p className="font-black text-slate-950 dark:text-white">{label}</p>
      </div>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
              value === option
                ? 'bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.34)]'
                : 'bg-white/10 text-slate-600 hover:bg-white/20 dark:text-slate-300'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
