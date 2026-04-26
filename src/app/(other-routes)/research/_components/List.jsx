import Image from "next/image";
import { research } from "@/data/research";

function ResearchList() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Papers
          </p>
        </div>

        <div className="flex flex-col">
          {research.map((item) => (
            <div key={item.id} className="group cursor-default">
              <div className="flex flex-col md:flex-row gap-8 py-10">
                <div className="w-full md:w-96 aspect-4/3 relative overflow-hidden shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col justify-between gap-5 md:gap-0 flex-1">
                  <div className="flex flex-col gap-3">
                    <p className="text-xs uppercase tracking-widest text-black">
                      {item.institution} · {item.year}
                    </p>
                    <h3 className="font-semibold text-xl md:text-2xl text-black leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-black/80 text-sm md:text-base leading-relaxed">
                      {item.body}
                    </p>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mt-4">
                    <p className="text-sm font-medium text-black/80">
                      {item.author}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-black underline underline-offset-4 hover:text-black/50 transition-colors w-fit"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-px bg-black/10 overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ResearchList;
