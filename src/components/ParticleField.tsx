import { motion } from 'framer-motion'

const particles = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: `${(index * 29) % 100}%`,
  top: `${(index * 47) % 100}%`,
  size: 2 + (index % 5),
  delay: (index % 9) * 0.4,
}))

export function ParticleField() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden motion-safe:block"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/50 shadow-[0_0_18px_rgba(34,211,238,0.8)]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [-18, 18, -18], opacity: [0.18, 0.74, 0.18], scale: [1, 1.6, 1] }}
          transition={{ duration: 5 + (particle.id % 6), repeat: Infinity, delay: particle.delay }}
        />
      ))}
    </div>
  )
}
