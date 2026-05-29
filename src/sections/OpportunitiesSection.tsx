import { motion } from 'framer-motion'
import { CheckCircle2, Filter, MapPin, Radar, ShieldCheck, Sparkles, Zap } from 'lucide-react'
import { useMemo, useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import {
  opportunities,
  opportunityCategories,
  opportunityDifficulties,
  opportunityModes,
} from '../data/siteData'
import { useLocalStorageState } from '../hooks/useLocalStorageState'
import { fadeUp, staggerContainer } from '../utils/motion'

export function OpportunitiesSection() {
  const [category, setCategory] = useState('Todos')
  const [mode, setMode] = useState('Todos')
  const [difficulty, setDifficulty] = useState('Todos')
  const [appliedTitles, setAppliedTitles] = useLocalStorageState<string[]>(
    'skillbridge:applied-opportunities',
    [],
  )

  const filteredOpportunities = useMemo(() => {
    return opportunities
      .filter((item) => category === 'Todos' || item.category === category)
      .filter((item) => mode === 'Todos' || item.mode === mode)
      .filter((item) => difficulty === 'Todos' || item.difficulty === difficulty)
      .sort((first, second) => second.match - first.match)
  }, [category, difficulty, mode])

  const bestOpportunity = filteredOpportunities[0]
  const applyToOpportunity = (title: string) => {
    setAppliedTitles((current) => (current.includes(title) ? current : [...current, title]))
  }

  return (
    <section id="oportunidades" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Dashboard de oportunidades"
          title="Freelas, vagas rapidas e microtrabalhos no mesmo lugar."
          description="A plataforma cruza habilidade, urgencia financeira, localizacao e historico de aprendizado para recomendar trabalhos possiveis agora."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="glass mt-12 rounded-[2rem] p-4 md:p-6"
        >
          <div className="mb-5 flex items-center gap-3 text-slate-950 dark:text-white">
            <Filter size={20} className="text-cyan-300" />
            <h3 className="font-black">Filtrar oportunidades por realidade do aluno</h3>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            <FilterGroup
              label="Tipo"
              options={opportunityCategories}
              value={category}
              onChange={setCategory}
            />
            <FilterGroup label="Modalidade" options={opportunityModes} value={mode} onChange={setMode} />
            <FilterGroup
              label="Dificuldade"
              options={opportunityDifficulties}
              value={difficulty}
              onChange={setDifficulty}
            />
          </div>
          <button
            type="button"
            onClick={() => {
              setCategory('Todos')
              setMode('Todos')
              setDifficulty('Todos')
            }}
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-full border border-white/60 bg-black px-5 text-sm font-black text-white transition hover:bg-yellow-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
          >
            Limpar filtros
          </button>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-5 md:p-7">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black text-slate-950 dark:text-white">Fila inteligente</h3>
                <p className="text-slate-600 dark:text-slate-300">Oportunidades verificadas por impacto e velocidade.</p>
              </div>
              <span className="rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
                {filteredOpportunities.length} recomendadas
              </span>
            </div>
            <div className="mb-5 rounded-3xl bg-white/8 p-4 text-sm font-bold text-slate-600 dark:text-slate-300">
              {appliedTitles.length} candidatura(s) salvas neste dispositivo.
            </div>

            <div className="grid gap-3">
              {filteredOpportunities.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="grid gap-4 rounded-3xl border border-white/10 bg-white/8 p-4 md:grid-cols-[1fr_auto]"
                >
                  <div>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-300">
                        {item.category}
                      </span>
                      {item.verified && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 px-2 py-0.5 text-xs font-black text-emerald-300">
                          <ShieldCheck size={13} /> Verificada
                        </span>
                      )}
                    </div>
                    <h4 className="mt-2 text-lg font-black text-slate-950 dark:text-white">{item.title}</h4>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm text-slate-500 dark:text-slate-300">
                      <span>{item.pay}</span>
                      <span>{item.time}</span>
                      <span>{item.mode}</span>
                      <span>{item.difficulty}</span>
                      <span>Match {item.match}%</span>
                    </div>
                    <div className="mt-3 h-2 max-w-sm overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.match}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-yellow-300 to-white"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => applyToOpportunity(item.title)}
                    className="rounded-2xl bg-yellow-300 px-5 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
                  >
                    {appliedTitles.includes(item.title) ? 'Enviado' : 'Candidatar'}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-5">
            {bestOpportunity && (
              <div className="glass rounded-3xl p-6">
                <Sparkles className="mb-5 text-emerald-300" size={28} />
                <h3 className="text-xl font-black text-slate-950 dark:text-white">
                  Melhor match agora
                </h3>
                <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
                  {bestOpportunity.title} combina {bestOpportunity.match}% com o perfil atual e pode gerar{' '}
                  {bestOpportunity.pay}.
                </p>
                {appliedTitles.includes(bestOpportunity.title) && (
                  <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-400/15 px-4 py-2 text-sm font-black text-emerald-300">
                    <CheckCircle2 size={17} /> Candidatura simulada enviada
                  </div>
                )}
              </div>
            )}
            {[
              { label: 'Verificacao social', text: 'Empresas e tarefas passam por filtro de seguranca.', icon: ShieldCheck },
              { label: 'Match por proximidade', text: 'Serviços locais aparecem para quem pode executar rápido.', icon: MapPin },
              { label: 'Renda emergencial', text: 'Trabalhos curtos priorizam pagamento claro e prazo definido.', icon: Zap },
              { label: 'Radar de crescimento', text: 'A cada tarefa, a plataforma sugere o proximo salto.', icon: Radar },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div key={item.label} className="glass rounded-3xl p-6">
                  <Icon className="mb-5 text-emerald-300" size={28} />
                  <h3 className="text-xl font-black text-slate-950 dark:text-white">{item.label}</h3>
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

type FilterGroupProps = {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
}

function FilterGroup({ label, options, value, onChange }: FilterGroupProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-black text-slate-600 dark:text-slate-300">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-4 py-2 text-sm font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 ${
              value === option
                ? 'bg-cyan-300 text-slate-950 shadow-[0_0_24px_rgba(250,204,21,0.34)]'
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
