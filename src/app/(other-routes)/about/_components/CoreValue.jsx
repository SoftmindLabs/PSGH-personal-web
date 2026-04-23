import { Hammer, Eye, TrendingUp, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Hammer,
    title: "Hardwork",
    description:
      "I bring relentless dedication to every project — whether it's a late-night research review or a complex medication audit. Excellence is the standard, not the exception.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open and honest communication with patients, colleagues, and institutions. I believe trust is built through clarity, not complexity.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Pharmacy is ever-evolving. I commit to continuous learning — staying current with clinical developments, policy changes, and best practices to serve better.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "From digital health tools to novel dispensing approaches, I actively seek smarter ways to improve pharmaceutical care and patient outcomes.",
  },
];

function CoreValues() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Core Values
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <div
                key={i}
                className="group flex flex-col gap-4 cursor-default py-5 md:py-10"
              >
                <div className="hidden md:block">
                  <Icon size={28} className="text-black" />
                </div>
                <div className="block md:hidden">
                  <Icon size={20} className="text-black" />
                </div>
                <div className="mt-3 flex flex-col gap-2 flex-1">
                  <p className="font-semibold text-xl md:text-3xl text-black">
                    {value.title}
                  </p>
                  <p className="text-black md:text-base text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
                <div className="relative h-px bg-black/10 mt-auto overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
