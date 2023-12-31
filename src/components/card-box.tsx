import { ReactNode } from 'react'

export function CardBox({ children }: { children: ReactNode }) {
  return <div className="p-5 rounded-lg bg-zinc-800">{children}</div>
}
