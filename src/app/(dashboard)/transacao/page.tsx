import { CardBox, Table } from '@/components'
import { MoreHorizontal } from 'lucide-react'

export default function Transaction() {
  return (
    <div className="p-8">
      <CardBox>
        <MoreHorizontal size={24} />

        <div className="pt-4 pb-4 flex justify-between">
          <h1 className="text-2xl">Contas a pagar e receber</h1>

          <ul className="flex items-center gap-4">
            <li className="flex flex-col items-center gap-1">
              <span className="text-3xl">10</span>
              <span className="text-xs text-green-400">Pagos</span>
            </li>

            <li className="pl-4 flex flex-col items-center gap-1 border-l-[1px] border-zinc-600">
              <span className="text-3xl">20</span>
              <span className="text-xs text-red-400">Pendentes</span>
            </li>
          </ul>
        </div>

        <Table />

        <div className="p-4 mt-10 flex justify-between items-end bg-zinc-800 rounded">
          <ul className="flex gap-4">
            <li className="flex flex-col gap-1">
              <span className="text-xs flex gap-1">
                <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-blue-400 rounded-full right-0">
                  I
                </span>
                Investimento
              </span>
              <span className="text-sm text-blue-400">R$ 1000.00</span>
            </li>
            <li className="pl-4 pr-4 flex flex-col gap-1  border-l-[1px] border-r-[1px] border-zinc-600">
              <span className="text-xs flex gap-1">
                <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-green-400 rounded-full right-0">
                  R
                </span>
                Receita
              </span>
              <span className="text-sm text-green-400">R$ 10000.00</span>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs flex gap-1">
                <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-red-400 rounded-full right-0">
                  D
                </span>
                Despesa
              </span>
              <span className="text-sm text-red-400">R$ 50000.00</span>
            </li>
          </ul>

          <p className="text-xs">
            Total: <span className="text-lg text-green-400">R$ 6000.00</span>
          </p>
        </div>
      </CardBox>
    </div>
  )
}
