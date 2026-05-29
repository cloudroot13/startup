import type { ReactNode } from 'react'

type PrimaryButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
}

export function PrimaryButton({ children, href, variant = 'primary' }: PrimaryButtonProps) {
  const classes =
    variant === 'primary'
      ? 'shine bg-gradient-to-r from-sky-400 via-blue-500 to-violet-600 text-white shadow-[0_0_36px_rgba(59,130,246,0.42)]'
      : 'glass text-slate-950 hover:border-emerald-300/70 dark:text-white'

  return (
    <a
      href={href}
      className={`${classes} inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-center text-sm font-black transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0`}
    >
      {children}
    </a>
  )
}
