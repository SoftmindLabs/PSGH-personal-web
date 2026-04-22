import { FlaskConical, Pill, ClipboardList, Microscope } from "lucide-react";

const services = [
  {
    icon: Pill,
    title: "Medication UX Design",
    description:
      "Designing intuitive interfaces for prescription management systems, medication trackers, and patient-facing pharmacy apps that reduce errors and improve adherence.",
  },
  {
    icon: FlaskConical,
    title: "Clinical  Platforms",
    description:
      "Building data portals and dashboards for clinical research teams to manage trial data, patient records, and regulatory documentation efficiently.",
  },
  {
    icon: ClipboardList,
    title: "Compliance Systems",
    description:
      "Developing structured document management tools tailored to pharmaceutical compliance workflows, audit trails, and FDA/EMA reporting standards.",
  },
  {
    icon: Microscope,
    title: "Research Dashboards",
    description:
      "Crafting data visualization interfaces for laboratory environments — from sample tracking to research analytics and compound analysis reporting.",
  },
];

function Services() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto py-20 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Explore Services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {services.map((service, i) => {
            const Icon = service.icon;
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
                    {service.title}
                  </p>
                  <p className="text-black md:text-base text-sm leading-relaxed">
                    {service.description}
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

export default Services;
