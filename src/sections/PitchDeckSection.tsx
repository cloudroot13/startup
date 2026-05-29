import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Presentation, ScrollText } from 'lucide-react'
import { useState } from 'react'
import { SectionHeader } from '../components/SectionHeader'
import { pitchSlides } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export function PitchDeckSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeSlide = pitchSlides[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((current) => (current === 0 ? pitchSlides.length - 1 : current - 1))
  }

  const goToNext = () => {
    setActiveIndex((current) => (current === pitchSlides.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="pitch" className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Pitch para apresentacao"
          title="Uma narrativa pronta para defender a SkillBridge."
          description="Use esta area como guia de fala: ela resume problema, solucao, diferencial, impacto e modelo de negocio em formato de pitch."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <motion.div variants={fadeUp} className="glass rounded-[2rem] p-5 md:p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-yellow-300 text-black">
                  <Presentation size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-950 dark:text-white">Slides</h3>
                  <p className="text-slate-600 dark:text-slate-300">Clique para navegar pelo roteiro.</p>
                </div>
              </div>
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-black text-slate-600 dark:text-slate-300">
                {activeIndex + 1}/{pitchSlides.length}
              </span>
            </div>

            <div className="grid gap-3">
              {pitchSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`rounded-3xl border p-4 text-left transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300 ${
                    activeIndex === index
                      ? 'border-yellow-300 bg-yellow-300 text-black'
                      : 'border-white/20 bg-white/8 text-white hover:border-yellow-300'
                  }`}
                >
                  <span className="text-xs font-black uppercase tracking-[0.22em]">{slide.label}</span>
                  <h4 className="mt-2 text-lg font-black">{slide.title}</h4>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass overflow-hidden rounded-[2rem] p-5 md:p-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeSlide.title}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.35 }}
              >
                <span className="text-sm font-black uppercase tracking-[0.28em] text-yellow-300">
                  Slide {activeSlide.label}
                </span>
                <h3 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-6xl dark:text-white">
                  {activeSlide.title}
                </h3>
                <p className="mt-6 text-xl leading-9 text-slate-700 dark:text-slate-200">
                  {activeSlide.text}
                </p>

                <div className="mt-8 rounded-3xl border border-white/20 bg-white/8 p-5">
                  <div className="mb-3 flex items-center gap-2 font-black text-yellow-300">
                    <ScrollText size={20} />
                    Nota de fala
                  </div>
                  <p className="leading-8 text-slate-600 dark:text-slate-300">
                    {activeSlide.speakerNote}
                  </p>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={goToPrevious}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-white/60 bg-black px-4 py-3 font-black text-white transition hover:bg-yellow-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
              >
                <ArrowLeft size={18} />
                Anterior
              </button>
              <button
                type="button"
                onClick={goToNext}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-yellow-300 px-4 py-3 font-black text-black transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-yellow-300"
              >
                Proximo
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
