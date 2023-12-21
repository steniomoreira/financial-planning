import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'
import {
  CircleDollarSign,
  CreditCard,
  LayoutDashboard,
  Settings,
  Banknote,
} from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="p-8 w-full max-w-[228px] border-r border-r-zinc-700 flex justify-start flex-col items-center gap-2">
      <Link href="/" className="flex items-center flex-col gap-2">
        <Image
          className="h-16 w-16 rounded-full"
          src="https://github.com/steniomoreira.png"
          width={64}
          height={64}
          alt=""
        />

        <span className="text-sm">Stenio Moreira</span>
      </Link>

      <Button color="secondary" size="sm">
        Profile
      </Button>

      <nav className="w-full mt-3">
        <ul>
          <li>
            <Link href="/">
              <Button
                className="w-full border-0 justify-start gap-4 text-zinc-500 font-semibold hover:bg-zinc-800 hover:text-yellow-200"
                color="secondary"
              >
                <LayoutDashboard className="text-zinc-300" size={15} />
                Dashboard
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className="w-full border-0 justify-start gap-4 text-zinc-500 font-semibold hover:bg-zinc-800 hover:text-yellow-200"
                color="secondary"
              >
                <CircleDollarSign className="text-zinc-300" size={15} />{' '}
                Receitas
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className="w-full border-0 justify-start gap-4 text-zinc-500 font-semibold hover:bg-zinc-800 hover:text-yellow-200"
                color="secondary"
              >
                <Banknote className="text-zinc-300" size={15} />
                Despesas
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className="w-full border-0 justify-start gap-4 text-zinc-500 font-semibold hover:bg-zinc-800 hover:text-yellow-200"
                color="secondary"
              >
                <CreditCard className="text-zinc-300" size={15} />
                Cartão de Crédito
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button
                className="w-full border-0 justify-start gap-4 text-zinc-500 font-semibold hover:bg-zinc-800 hover:text-yellow-200"
                color="secondary"
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
