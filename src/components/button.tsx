import { ComponentProps, ReactNode } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex justify-center gap-2 font-bold text-zinc-900 rounded-xl transition duration-75',
  variants: {
    color: {
      primary: 'bg-yellow-200 hover:bg-opacity-80',
      secondary: 'border border-zinc-700 text-zinc-300 hover:opacity-75',
    },
    size: {
      sm: 'px-3 py-1 text-xs font-normal rounded-2xl',
      md: 'py-3 px-3 text-xs',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
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
    <button className={button({ color, size, className })} {...props}>
      {children}
    </button>
  )
}
