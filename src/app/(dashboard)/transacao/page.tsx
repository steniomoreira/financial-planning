import { CardBox, Table } from '@/components'
import { MoreHorizontal } from 'lucide-react'
import { HeaderTransactions } from './components'

export default function Transaction() {
  return (
    <div className="p-8">
      <HeaderTransactions />

      <CardBox>
        <div className="pt-4 pb-4 flex justify-between">
          <h1 className="text-2xl">Janeiro/2024</h1>

          <MoreHorizontal size={24} />
        </div>

        <Table />
      </CardBox>
    </div>
  )
}
