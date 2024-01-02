import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../Button'
import { NavLink } from '../Sidebar/components/NavLink'
import { CircleDollarSign, LayoutDashboard } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="p-8 w-full max-w-[228px] border-r border-r-zinc-700 flex justify-start flex-col items-center gap-2">
      <Link href="/" className="flex items-center flex-col gap-2">
        <Image
          className="h-16 w-16 rounded-full"
          src="https://github.com/steniomoreira.png"
          width={64}
          height={64}
          priority
          alt=""
        />

        <span className="text-sm">Stenio Moreira</span>
      </Link>

      <Button color="secondary" size="sm">
        Perfil
      </Button>

      <nav className="w-full mt-3">
        <NavLink to="/">
          <LayoutDashboard className="text-zinc-300" size={18} />
          Dashboard
        </NavLink>
        <NavLink to="/transacao">
          <CircleDollarSign className="text-zinc-300" size={18} />
          Transação
        </NavLink>
      </nav>
    </aside>
  )
}
