import { AnimatePresence, motion } from 'framer-motion'
import { ALargeSmall, Languages, Pause, Play, Square, Trash2, Volume2, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useSpeechReader } from '../hooks/useSpeechReader'
import { useLocalStorageState } from '../hooks/useLocalStorageState'

const speechLanguages = [
  { label: 'Portugues', value: 'pt-BR' },
  { label: 'English', value: 'en-US' },
  { label: 'Espanol', value: 'es-ES' },
  { label: 'Francais', value: 'fr-FR' },
]

export function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [largeText, setLargeText] = useLocalStorageState('skillbridge:large-text', false)
  const [language, setLanguage] = useLocalStorageState('skillbridge:speech-language', 'pt-BR')
  const { isSupported, isSpeaking, isPaused, voiceName, speak, pause, stop } =
    useSpeechReader(language)

  useEffect(() => {
    document.documentElement.classList.toggle('large-text', largeText)
  }, [largeText])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const clearSimulationData = () => {
    Object.keys(window.localStorage)
      .filter((key) => key.startsWith('skillbridge:'))
      .forEach((key) => window.localStorage.removeItem(key))

    window.location.reload()
  }

  return (
    <div className="fixed bottom-5 right-4 z-[80] md:bottom-6 md:right-6">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.96 }}
            className="glass mb-3 w-[min(92vw,360px)] rounded-[2rem] p-4"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-black text-slate-950 dark:text-white">
                  Acessibilidade
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Leitura em voz alta, idioma da voz e fonte maior.
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar painel de acessibilidade"
                onClick={() => setIsOpen(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:text-white"
              >
                <X size={18} />
              </button>
            </div>

            <div className="grid gap-3">
              <button
                type="button"
                onClick={speak}
                disabled={!isSupported}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-4 py-3 font-black text-slate-950 transition hover:-translate-y-0.5 disabled:opacity-50"
              >
                <Volume2 size={18} />
                {isSpeaking ? 'Reiniciar leitura' : 'Ler pagina em voz alta'}
              </button>

              <p className="rounded-2xl bg-white/10 p-3 text-xs leading-5 text-slate-600 dark:text-slate-300">
                Voz selecionada: {voiceName}
              </p>

              <label className="grid gap-2 rounded-2xl bg-white/10 p-3">
                <span className="inline-flex items-center gap-2 text-sm font-black text-slate-950 dark:text-white">
                  <Languages size={17} />
                  Idioma da leitura
                </span>
                <select
                  value={language}
                  onChange={(event) => setLanguage(event.target.value)}
                  className="min-h-11 rounded-xl border border-white/20 bg-black px-3 py-2 font-bold text-white outline-none focus:border-yellow-300"
                >
                  {speechLanguages.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <span className="text-xs leading-5 text-slate-600 dark:text-slate-300">
                  Use o mesmo idioma escolhido no tradutor do navegador.
                </span>
              </label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={pause}
                  disabled={!isSpeaking}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-black text-slate-950 disabled:opacity-50 dark:text-white"
                >
                  {isPaused ? <Play size={18} /> : <Pause size={18} />}
                  {isPaused ? 'Continuar' : 'Pausar'}
                </button>
                <button
                  type="button"
                  onClick={stop}
                  disabled={!isSpeaking}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 font-black text-slate-950 disabled:opacity-50 dark:text-white"
                >
                  <Square size={16} />
                  Parar
                </button>
              </div>

              <div className="grid gap-3">
                <ToggleButton
                  active={largeText}
                  icon={<ALargeSmall size={18} />}
                  label="Fonte maior"
                  onClick={() => setLargeText((current) => !current)}
                />
              </div>

              <button
                type="button"
                onClick={clearSimulationData}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm font-black text-slate-950 transition hover:bg-yellow-300 hover:text-black dark:text-white"
              >
                <Trash2 size={17} />
                Limpar simulacao salva
              </button>

              {!isSupported && (
                <p className="rounded-2xl bg-amber-300/15 p-3 text-sm leading-6 text-amber-200">
                  Este navegador nao suporta leitura por voz nativa.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        aria-label="Abrir painel de acessibilidade"
        onClick={() => setIsOpen((current) => !current)}
        className="shine grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-cyan-300 to-violet-500 text-white shadow-[0_0_36px_rgba(34,211,238,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
      >
        <Volume2 size={24} />
      </button>
    </div>
  )
}

type ToggleButtonProps = {
  active: boolean
  icon: React.ReactNode
  label: string
  onClick: () => void
}

function ToggleButton({ active, icon, label, onClick }: ToggleButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl px-3 py-3 text-sm font-black transition ${
        active ? 'bg-emerald-300 text-slate-950' : 'bg-white/10 text-slate-950 dark:text-white'
      }`}
    >
      {icon}
      {label}
    </button>
  )
}
