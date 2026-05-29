import { motion } from 'framer-motion'
import { ArrowRight, Globe2, Mail, MessageCircle, Send } from 'lucide-react'
import { PrimaryButton } from '../components/PrimaryButton'
import logo from '../assets/logo.png'
import { navLinks } from '../data/siteData'
import { fadeUp } from '../utils/motion'

export function Footer() {
  return (
    <footer id="cta" className="relative px-4 pb-8 pt-20">
      <div className="mx-auto max-w-7xl">
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-120px' }}
          className="glass overflow-hidden rounded-[2.4rem] p-8 text-center md:p-14"
        >
          <img
            src={logo}
            alt="SkillBridge"
            className="mx-auto mb-8 h-20 w-20 rounded-3xl border border-white/70 bg-black object-contain p-2 shadow-[0_0_54px_rgba(250,204,21,0.25)]"
          />
          <h2 className="mx-auto max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-7xl dark:text-white">
            Uma habilidade pode mudar uma vida. Uma plataforma pode mudar milhares.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Participe da SkillBridge e ajude a transformar conhecimento em renda,
            autoestima e oportunidade real para quem mais precisa.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <PrimaryButton href="#inicio">
              Entrar na plataforma <ArrowRight size={18} />
            </PrimaryButton>
            <PrimaryButton href="#cursos" variant="secondary">
              Ver trilhas
            </PrimaryButton>
          </div>
        </motion.section>

        <div className="mt-10 grid gap-8 rounded-[2rem] border border-white/10 px-4 py-8 md:grid-cols-[1.2fr_0.8fr_1fr] md:px-8">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="SkillBridge"
                className="h-12 w-12 rounded-full border border-white/70 bg-black object-contain p-1"
              />
              <span className="text-xl font-black text-slate-950 dark:text-white">SkillBridge</span>
            </div>
            <p className="mt-4 max-w-sm leading-7 text-slate-600 dark:text-slate-300">
              Plataforma social focada em educação prática, renda e inclusão digital.
            </p>
          </div>

          <div>
            <h3 className="font-black text-slate-950 dark:text-white">Links</h3>
            <div className="mt-4 grid gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-600 hover:text-cyan-300 dark:text-slate-300">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-black text-slate-950 dark:text-white">Newsletter</h3>
            <div className="mt-4 flex overflow-hidden rounded-full border border-white/10 bg-white/10">
              <input
                aria-label="Email"
                placeholder="seu@email.com"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-slate-950 outline-none placeholder:text-slate-500 dark:text-white"
              />
              <button type="button" className="grid w-12 place-items-center bg-cyan-300 text-slate-950">
                <Mail size={18} />
              </button>
            </div>
            <div className="mt-5 flex gap-3 text-slate-500 dark:text-slate-300">
              {[Globe2, MessageCircle, Send].map((Icon, index) => (
                <a
                  key={index}
                  href="#inicio"
                  aria-label="Rede social"
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 transition hover:bg-cyan-300 hover:text-slate-950"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-white/10 bg-white/8 px-5 py-4 text-center text-sm font-bold text-slate-600 dark:text-slate-300">
          <p>SkillBridge © 2026</p>
          <p className="mt-1">Criado por Gabriel, Julia, Alef e Roney.</p>
        </div>
      </div>
    </footer>
  )
}
