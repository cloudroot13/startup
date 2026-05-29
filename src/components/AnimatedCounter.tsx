import { useRef } from 'react'
import { useCountUp } from '../hooks/useCountUp'

type AnimatedCounterProps = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export function AnimatedCounter({
  value,
  label,
  prefix = '',
  suffix = '',
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null)
  const count = useCountUp({ value, ref, decimals })

  return (
    <div ref={ref} className="glass rounded-3xl p-6">
      <strong className="block bg-gradient-to-r from-white via-sky-100 to-emerald-200 bg-clip-text text-3xl font-black text-transparent md:text-4xl dark:from-white dark:via-sky-100 dark:to-emerald-200">
        {prefix}
        {count}
        {suffix}
      </strong>
      <span className="mt-2 block text-sm text-slate-500 dark:text-slate-300">{label}</span>
    </div>
  )
}
