import { tv } from 'tailwind-variants'

const hoverBase = 'hover:cursor-pointer'
const disabledBase = 'disabled:cursor-not-allowed disabled:text-zinc-500'

export const ButtonTv = tv({
  base: `flex justify-center gap-2 font-bold text-zinc-900 rounded-xl transition duration-75 ${hoverBase} ${disabledBase}`,
  variants: {
    color: {
      primary: 'bg-yellow-200 hover:bg-opacity-80',
      secondary:
        'border border-zinc-700 text-zinc-300 hover:bg-opacity-75 hover:text-zinc-400',
    },
    size: {
      sm: 'px-3 py-1 text-[10px] font-normal rounded-2xl',
      md: 'py-3 px-3 text-sm',
    },
  },
  defaultVariants: {
    color: 'primary',
    size: 'md',
  },
})
