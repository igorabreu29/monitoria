import Image from "next/image";
import Ifpa from '../../public/ifpa-local.jpg'

export function Introduction() {
    return (
     <main className="flex justify-around align-center px-8 py-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-3xl">O que é a monitoria?</h1>
          <p className="w-64">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
             Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and </p>
        </div>

        <div className="flex items-center justify-center">
          <Image src={Ifpa} alt="" width={340} height={350} className="rounded-3xl" />
        </div>
    </main>
    )
}