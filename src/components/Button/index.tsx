import { ComponentProps, ReactNode } from 'react'
import { VariantProps } from 'tailwind-variants'
import { ButtonTv } from './styles'

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof ButtonTv> & {
    children: ReactNode
  }

export function Button({
  color,
  size,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={ButtonTv({ color, size, className })} {...props}>
      {children}
    </button>
  )
}
