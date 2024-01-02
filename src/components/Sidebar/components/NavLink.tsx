import Link from 'next/link'
import { ReactNode } from 'react'

type NavLinkProps = {
  to: string
  children: ReactNode
}

const navLinkHover = 'hover:bg-zinc-800 hover:text-yellow-200'
const navLinkBase = `w-full py-3 px-3 text-md flex justify-start items-center gap-4 text-zinc-500 bg-transparent font-semibold rounded-xl transition duration-75 ${navLinkHover}`

export function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link href={to} className={navLinkBase}>
      {children}
    </Link>
  )
}
