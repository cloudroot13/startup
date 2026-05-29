import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { SectionHeader } from '../components/SectionHeader'
import { testimonials } from '../data/siteData'
import { fadeUp, staggerContainer } from '../utils/motion'

export function TestimonialsSection() {
  return (
    <section className="relative px-4 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Historias de transformacao"
          title="Quando a ponte aparece, o talento atravessa."
          description="Relatos ficticios para demonstrar o tipo de mudanca social que a plataforma busca gerar."
          center
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="mt-14 grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={fadeUp}
              whileHover={{ y: -10 }}
              className="glass rounded-[2rem] p-7"
            >
              <Quote className="mb-8 text-cyan-300" size={32} />
              <p className="text-lg leading-8 text-slate-700 dark:text-slate-200">
                “{testimonial.quote}”
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-slate-950 dark:text-white">{testimonial.name}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
                </div>
                <div className="flex gap-1 text-emerald-300">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
