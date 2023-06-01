import { CheckSquare, FileClock, ListChecks } from "lucide-react";

export function Card() {
    return (
     <article className="flex flex-col items-center justify-center gap-4 px-8 py-4">
        <h2 className="text-xl font-bold">Funcionalidades do site</h2>
        <div className="flex items-center justify-center gap-28">
          <div className="rounded-3xl flex flex-col items-start justify-center gap-5 border border-teal-800 border-x-2 border-y-2 max-w-[323px] w-full p-8">
            <h3 className="flex items-center justify-center gap-4 text-green-500 font-medium">
              Check List's
              <CheckSquare />
            </h3>
            <p className="w-68">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and
            </p>
          </div>

          <div className="rounded-3xl flex flex-col items-start justify-center gap-5 border border-teal-800 border-x-2 border-y-2 max-w-[323px] w-full p-8">
            <h3 className="flex items-center justify-center gap-4 text-orange-500 font-medium">
              Check List's
              <FileClock />
            </h3>
            <p className="w-68">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and
            </p>
          </div>

          <div className="rounded-3xl flex flex-col items-start justify-center gap-5 border border-teal-800 border-x-2 border-y-2 max-w-[323px] w-full p-8">
            <h3 className="flex items-center justify-center gap-4 text-purple-500 font-medium">
              Check List's
              <ListChecks />
            </h3>
            <p className="w-68">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and
            </p>
          </div>
        </div>
      </article>
    )
}