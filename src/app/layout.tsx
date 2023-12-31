import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Financial Planning App',
  description: 'Financial control system',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt" className={inter.className}>
      <body className="bg-zinc-900 text-zinc-200 antialiased">{children}</body>
    </html>
  )
}
