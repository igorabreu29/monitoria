import Link from "next/link";
import Image  from "next/image";

import Logo from '../../public/logo.svg'

export function Header() {
    return (
     <header className="relative flex justify-between items-center gap-4 px-8 h-40 after:bg-zinc-600 after:h-[2px] after:w-full after:absolute after:bottom-0 after:left-0">
        <div>
          <Image src={Logo} alt="" width={210} height={230} />
        </div>

        <nav className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center gap-10 text-base">
            <Link href={'/'} className="transition-all hover:underline">Home</Link>
            <Link href={'#'} className="transition-all hover:underline">Ajuda</Link>
            <Link href={'/about'} className="transition-all hover:underline">Sobre nós</Link>
            <Link href={'#'} className="transition-all hover:underline">Entrar</Link>
          </div>
          <div className="bg-slate-50 h-10 w-[2px]"></div>
          <Link 
            href={'#'} 
            className="flex items-center justify-center font-semibold text-black transition-colors bg-teal-600 hover:bg-teal-500 h-12 w-40 rounded-2xl">
              Registrar-se
          </Link>
        </nav>
      </header>
    )
}