import Image from "next/image";
import { shimmer } from "@/lib/placeholder";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[69vh] lg:min-h-[120vh]">
      <div className="bg-white flex flex-col mt-10 md:mt-20 pt-15 md:pt-30 pb-5 w-[95%] md:px-10 mx-auto items-start justify-end">
        <h1 className="font-bold leading-none tracking-tighter text-5xl md:text-[230px]">
          About Me
        </h1>
      </div>

      <div>
        <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden lg:h-90">
          <div className="absolute inset-0">
            <Image
              src="/landing/hero.jpg"
              alt="Hero"
              fill
              placeholder="blur"
              blurDataURL={shimmer}
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center center" }}
              priority
            />

            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent" />
          </div>
        </section>
      </div>
    </section>
  );
}
