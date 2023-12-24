import { Button } from './Button'
import { Bell, Plus } from 'lucide-react'

export function Header() {
  return (
    <header className="p-8 flex justify-between">
      <span>Dashboard</span>
      <span className="flex justify-center gap-3">
        <Button>
          <Plus size={15} />
          Adicionar conta
        </Button>
        <Button color="secondary">
          <Bell size={15} />
        </Button>
      </span>
    </header>
  )
}
