import { useEffect, useMemo, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import type { RefObject } from 'react'

type CountUpOptions = {
  value: number
  ref: RefObject<Element | null>
  decimals?: number
}

export function useCountUp({ value, ref, decimals = 0 }: CountUpOptions) {
  const [display, setDisplay] = useState(0)
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 70, damping: 18 })
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    return spring.on('change', (latest) => {
      setDisplay(Number(latest.toFixed(decimals)))
    })
  }, [decimals, spring])

  return useMemo(() => display.toLocaleString('pt-BR'), [display])
}
