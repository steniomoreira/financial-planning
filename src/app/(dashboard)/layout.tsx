import { ReactNode } from 'react'
import { Header, Sidebar } from '@/components'

type DashboardLayoutProps = {
  children: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-[1600px]">
      <Sidebar />

      <div className="w-full">
        <Header />
        {children}
      </div>
    </main>
  )
}
