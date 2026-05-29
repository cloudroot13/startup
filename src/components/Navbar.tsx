import { AnimatePresence, motion } from 'framer-motion'
import { Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { navLinks } from '../data/siteData'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    document.documentElement.classList.toggle('light', !isDark)
  }, [isDark])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-0 right-0 top-0 z-50 px-4 pt-4"
    >
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-5">
        <a href="#inicio" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SkillBridge"
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-bold text-slate-600 transition hover:bg-white/10 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Alternar tema"
            onClick={() => setIsDark((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-slate-950 transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:text-white"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#cta"
            className="shine hidden rounded-full bg-white px-5 py-2 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 md:inline-flex"
          >
            Entrar
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setIsOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 dark:text-white md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.96 }}
            className="glass mx-auto mt-3 grid max-w-7xl gap-2 rounded-3xl p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 font-bold text-slate-700 hover:bg-white/10 dark:text-slate-200"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
