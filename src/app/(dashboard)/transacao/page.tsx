import { CardBox } from '@/components'
import { MoreHorizontal } from 'lucide-react'
import { HeaderTransactions, TableTransactions } from './components'

export default function Transaction() {
  return (
    <div className="p-8">
      <HeaderTransactions />

      <CardBox>
        <div className="pt-4 pb-4 flex justify-between">
          <h2 className="text-2xl">Janeiro/2024</h2>

          <MoreHorizontal size={24} />
        </div>

        <TableTransactions />
      </CardBox>
    </div>
  )
}
