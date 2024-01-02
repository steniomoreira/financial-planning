'use client'

import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
  className: string
}

export function ActiveLink({ children, className, ...props }: ActiveLinkProps) {
  const path = usePathname()

  const [isActiveLink, serActiveLink] = useState(false)

  useEffect(() => {
    if (path === props.href) return serActiveLink(true)

    return serActiveLink(false)
  }, [path, props.href])

  return (
    <Link
      className={`${className} ${
        isActiveLink ? 'text-yellow-200' : 'text-zinc-500'
      }`}
      {...props}
    >
      {children}
    </Link>
  )
}
