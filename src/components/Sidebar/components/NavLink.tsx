import { ReactNode } from 'react'
import { ActiveLink } from './ActiveLink'

type NavLinkProps = {
  to: string
  children: ReactNode
}

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <ActiveLink
      href={to}
      className="p-3 text-md flex justify-start items-center gap-4 font-semibold rounded-xl transition duration-75 hover:bg-zinc-800"
    >
      {children}
    </ActiveLink>
  )
}
