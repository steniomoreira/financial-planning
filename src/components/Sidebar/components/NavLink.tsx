import { Button } from '@/components'
import Link from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = {
  to: string
  children: ReactNode
}

const navHover = 'hover:bg-zinc-800 hover:text-yellow-200'

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link href={to}>
      <Button
        className={`w-full border-0 justify-start gap-4 text-zinc-500 bg-transparent font-semibold ${navHover}`}
        color="primary"
      >
        {children}
      </Button>
    </Link>
  )
}
