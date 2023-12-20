import Image from 'next/image'
import Link from 'next/link'

export function Sidebar() {
  return (
    <aside className="p-8 w-full max-w-[228px] border-r border-r-zinc-700 flex justify-center ">
      <Link href="/" className="flex items-center flex-col gap-2">
        <Image
          className="h-16 w-16 rounded-full"
          src="https://github.com/steniomoreira.png"
          width={64}
          height={64}
          alt=""
        />
        <span className="text-sm">Stenio Moreira</span>

        <button className="px-3 py-1 text-xs border border-zinc-700 rounded-2xl transition hover:border-zinc-500">
          Editar
        </button>
      </Link>
    </aside>
  )
}
