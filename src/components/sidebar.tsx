import Image from 'next/image'
import Link from 'next/link'
import { Button } from './Button'
import {
  CircleDollarSign,
  CreditCard,
  LayoutDashboard,
  Settings,
} from 'lucide-react'

const navHover = 'hover:bg-zinc-800 hover:text-yellow-200'
const navActive = 'bg-zinc-800 text-yellow-200'

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
        <ul>
          <li>
            <Link href="/">
              <Button
                className={`w-full border-0 justify-start gap-4 font-semibold ${navHover} ${navActive}`}
                color="primary"
              >
                <LayoutDashboard className="text-zinc-300" size={15} />
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/transacao">
              <Button
                className={`w-full border-0 justify-start gap-4 text-zinc-500 bg-transparent font-semibold ${navHover}`}
                color="primary"
              >
                <CircleDollarSign className="text-zinc-300" size={15} />
                Transação
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className={`w-full border-0 justify-start gap-4 text-zinc-500 bg-transparent font-semibold ${navHover}`}
                color="primary"
              >
                <CreditCard className="text-zinc-300" size={15} />
                Cartão de Crédito
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className={`w-full border-0 justify-start gap-4 text-zinc-500 bg-transparent font-semibold ${navHover}`}
                color="primary"
              >
                <Settings className="text-zinc-300" size={15} />
                Configuração
              </Button>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}
