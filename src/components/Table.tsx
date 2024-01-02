import {
  Car,
  CheckSquare,
  GraduationCap,
  Home,
  Pencil,
  ScanBarcode,
  Square,
  Trash2,
  Utensils,
} from 'lucide-react'
import { Button } from './Button'

export function Table() {
  return (
    <table className="w-full text-zinc-50">
      <thead className="w-full text-sm text-zinc-400 border-t-[1px] border-b-[1px] border-zinc-600">
        <tr>
          <th className="p-2 text-sm text-left">Status</th>
          <th className="p-2 text-sm">Data</th>
          <th className="p-2 text-sm">Descrição</th>
          <th className="p-2 text-sm">Valor</th>
          <th className="p-2 text-sm text-left">Conta</th>
          <th className="p-2 text-sm">Categoria</th>
          <th className="p-2 text-sm">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 text-sm">
            <div className="flex justify-start items-center gap-4">
              <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-green-400 rounded-full right-0">
                R
              </span>
              <CheckSquare className="text-yellow-200" size={14} />
              Pago
            </div>
          </td>
          <td className="p-2 text-center text-sm">21/12/2023</td>
          <td className="p-2 text-left text-sm">Internet</td>
          <td className="p-2 text-right text-sm text-green-400">R$ 100.00</td>
          <td className="p-2 text-left text-sm">
            <span className="w-2 h-2 inline-block rounded bg-orange-600" /> Itaú
          </td>
          <td className="p-2 text-sm">
            <div className="flex justify-start gap-2 items-center">
              <span className="w-7 h-7  rounded-full bg-zinc-600 flex justify-center items-center">
                <Home size={15} />
              </span>
              Moradia
            </div>
          </td>
          <td className="p-2 text-sm">
            <div className="p-2 rounded-md flex justify-around bg-zinc-800">
              <Button className="p-0 border-0" color="secondary" disabled>
                <ScanBarcode size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-blue-400"
                color="secondary"
              >
                <Pencil size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-red-400 "
                color="secondary"
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 text-sm">
            <div className="flex justify-start items-center gap-4">
              <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-red-400 rounded-full right-0">
                D
              </span>
              <Square className="text-zinc-600" size={14} />
              Pendente
            </div>
          </td>
          <td className="p-2 text-center text-sm">21/12/2023</td>
          <td className="p-2 text-left text-sm">Abastecimento carro</td>
          <td className="p-2 text-right text-sm text-red-400">R$ 210.00</td>
          <td className="p-2 text-left text-sm">
            <span className="w-2 h-2 inline-block rounded bg-violet-700" />{' '}
            Nubank
          </td>
          <td className="p-2 text-sm">
            <div className="flex justify-start gap-2 items-center">
              <span className="w-7 h-7  rounded-full bg-zinc-600 flex justify-center items-center">
                <Car size={15} />
              </span>
              Transporte
            </div>
          </td>
          <td className="p-2 text-sm ">
            <div className="p-2 rounded-md flex justify-around bg-zinc-800">
              <Button
                className="p-0 border-0 hover:text-yellow-200"
                color="secondary"
              >
                <ScanBarcode size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-blue-400"
                color="secondary"
              >
                <Pencil size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-red-400"
                color="secondary"
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 text-sm">
            <div className="flex justify-start items-center gap-4">
              <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-red-400 rounded-full right-0">
                D
              </span>
              <Square className="text-zinc-600" size={14} />
              Pendente
            </div>
          </td>
          <td className="p-2 text-center text-sm">21/12/2023</td>
          <td className="p-2 text-left text-sm">FIES</td>
          <td className="p-2 text-right text-sm text-red-400">R$ 115.00</td>
          <td className="p-2 text-left text-sm">
            <span className="w-2 h-2 inline-block rounded bg-yellow-500" /> BB
          </td>
          <td className="p-2 text-sm">
            <div className="flex justify-start gap-2 items-center">
              <span className="w-7 h-7  rounded-full bg-zinc-600 flex justify-center items-center">
                <GraduationCap size={15} />
              </span>
              Educação
            </div>
          </td>
          <td className="p-2 text-sm ">
            <div className="p-2 rounded-md flex justify-around bg-zinc-800">
              <Button
                className="p-0 border-0 hover:text-yellow-200"
                color="secondary"
              >
                <ScanBarcode size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-blue-400"
                color="secondary"
              >
                <Pencil size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-red-400"
                color="secondary"
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </td>
        </tr>
        <tr>
          <td className="p-2 text-sm">
            <div className="flex justify-start items-center gap-4">
              <span className="w-4 h-4 text-[10px] flex justify-center items-center text-zinc-800 bg-red-400 rounded-full right-0">
                D
              </span>
              <Square className="text-zinc-600" size={14} />
              Pendente
            </div>
          </td>
          <td className="p-2 text-center text-sm">21/12/2023</td>
          <td className="p-2 text-left text-sm">Café e restaurantes</td>
          <td className="p-2 text-right text-sm text-red-400">R$ 250.00</td>
          <td className="p-2 text-left text-sm">
            <span className="w-2 h-2 inline-block rounded bg-gray-500" />{' '}
            Carteira
          </td>
          <td className="p-2 text-sm">
            <div className="flex justify-start gap-2 items-center">
              <span className="w-7 h-7  rounded-full bg-zinc-600 flex justify-center items-center">
                <Utensils size={15} />
              </span>
              Alimentação
            </div>
          </td>
          <td className="p-2 text-sm ">
            <div className="p-2 rounded-md flex justify-around bg-zinc-800">
              <Button
                className="p-0 border-0 hover:text-yellow-200"
                color="secondary"
              >
                <ScanBarcode size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-blue-400"
                color="secondary"
              >
                <Pencil size={14} />
              </Button>
              <Button
                className="p-0 border-0 hover:text-red-400"
                color="secondary"
              >
                <Trash2 size={14} />
              </Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
