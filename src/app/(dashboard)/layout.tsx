import { ReactNode } from 'react'
import { Header, Sidebar } from '@/components'

type DashboardLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main>
      <Header />
      <Sidebar />
      {children}
    </main>
  )
}
