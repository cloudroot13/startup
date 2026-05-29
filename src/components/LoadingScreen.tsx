import { AnimatePresence, motion } from 'framer-motion'
import logo from '../assets/logo.png'

type LoadingScreenProps = {
  isLoading: boolean
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          className="fixed inset-0 z-[120] grid place-items-center bg-slate-950 motion-reduce:hidden"
        >
          <motion.div
            initial={{ scale: 0.82, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <motion.img
              src={logo}
              alt="SkillBridge"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
              className="mx-auto h-20 w-20 rounded-full border border-white/70 bg-black object-contain p-2 shadow-[0_0_44px_rgba(250,204,21,0.35)]"
            />
            <p className="mt-6 bg-gradient-to-r from-cyan-200 to-emerald-200 bg-clip-text text-2xl font-black text-transparent">
              SkillBridge
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
