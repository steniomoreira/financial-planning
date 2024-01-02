import { CardBox } from '@/components'

type HeaderCardValueProps = {
  label?: string
  isIncome?: boolean
  text: string
  value: string
}

export function HeaderCardValue({
  label,
  isIncome = false,
  text,
  value,
}: HeaderCardValueProps) {
  const color = isIncome ? 'text-green-400' : 'text-red-400'
  const bgColor = isIncome ? 'bg-green-400' : 'bg-red-400'

  return (
    <CardBox>
      <span className="mb-2 text-md flex items-center gap-2">
        {label && (
          <span
            className={`w-5 h-5 text-sm flex justify-center items-center text-zinc-800 rounded-full ${bgColor}`}
          >
            {label}
          </span>
        )}
        {text}
      </span>
      <p className={`text-2xl text-right ${color}`}>{value}</p>
    </CardBox>
  )
}
