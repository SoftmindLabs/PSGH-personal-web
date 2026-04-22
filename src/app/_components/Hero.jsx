import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-[#6c6457] min-h-[69vh] lg:min-h-[120vh]">
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
        <Image
          src="/landing/hero (1).webp"
          alt="Professor Hero"
          width={520}
          height={620}
          className="object-contain object-bottom h-full w-auto"
          priority
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-linear-to-t from-black/70 via-black/30 to-transparent z-1 pointer-events-none" />

      <div className="relative z-10 flex flex-col min-h-[80vh]">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[40%] hidden lg:flex items-start justify-between text-white">
          <p className="text-base">@ {new Date().getFullYear()}</p>
          <ul>
            <li>Research</li>
            <li>Academic Writing</li>
            <li>Teaching</li>
            <li>Public Service</li>
          </ul>
        </div>
        <div className="flex flex-col items-center pt-30 lg:hidden">
          <p className="text-white text-xl font-medium">Hey there, I'm</p>
          <h1 className="text-white font-bold leading-none tracking-tight text-[clamp(3rem,8vw,6rem)] text-center">
            Paul Donkor
          </h1>
        </div>
        <div className="flex-1" />

        <div className="relative z-10 pb-4 w-full lg:hidden">
          <h2
            className="text-white font-extrabold leading-none tracking-tighter w-full text-center"
            style={{ fontSize: "clamp(2.5rem, 13vw, 6rem)" }}
          >
            President of PSGH
          </h2>
        </div>

        <div className="hidden lg:flex items-center w-[95%] mx-auto justify-between min-h-screen">
          <div className="flex-1 flex items-center px-10">
            <div className="space-y-2">
              <h2 className="text-white text-5xl font-bold">Hey there, I'm</h2>
              <h1 className="-ml-1 text-white font-extrabold leading-28 tracking-tight text-[clamp(3.5rem,9vw,8.5rem)]">
                Paul
                <br />
                Donkor
              </h1>
            </div>
          </div>

          <div className="flex justify-end px-10 z-10">
            <div className="flex flex-col gap-6 text-white">
              <div className="border-l-4 border-white/70 pl-3">
                <p className="font-bold text-3xl leading-8 tracking-tighter">
                  Based in Accra,
                </p>
                <p className="font-bold text-3xl leading-8 tracking-tighter">
                  Ghana
                </p>
              </div>
              <div className="border-l-4 border-white/70 pl-3">
                <p className="font-bold text-3xl leading-8 tracking-tighter">
                  Lecturer &
                </p>
                <p className="font-bold text-3xl leading-8 tracking-tighter">
                  Research Fellow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex relative z-10 h-[21vh] items-end justify-center w-full">
          <h2
            className="text-white font-bold leading-none tracking-tighter w-full text-center"
            style={{ fontSize: "clamp(1.5rem, 12vw, 50vw)" }}
          >
            President of PSGH
          </h2>
        </div>
      </div>
    </section>
  );
}
