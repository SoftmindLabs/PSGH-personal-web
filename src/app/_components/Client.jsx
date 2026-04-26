import Image from "next/image";
import { shimmer } from "@/lib/placeholder";

const clients = [
  {
    number: "01",
    name: "MedPharma Solutions",
    industry: "Pharmaceuticals",
    year: "2025",
  },
  {
    number: "02",
    name: "RxBridge Health",
    industry: "Healthcare IT",
    year: "2025",
  },
  {
    number: "03",
    name: "ClinPath Labs",
    industry: "Clinical Research",
    year: "2024",
  },
  {
    number: "04",
    name: "VitalDose Inc.",
    industry: "Drug Delivery",
    year: "2023",
  },
  { number: "05", name: "GenScript Africa", industry: "Biotech", year: "2023" },
  {
    number: "06",
    name: "PharmaTrace",
    industry: "Compliance & Regulatory",
    year: "2022",
  },
  { number: "07", name: "NovaCure Digital", industry: "MedTech", year: "2021" },
  {
    number: "08",
    name: "ApexRx Group",
    industry: "Retail Pharmacy",
    year: "2020",
  },
];

const reviews = [
  {
    title: "A strategic partner for our clinical operations",
    body: "The team transformed our outdated prescription portal into a clean, compliant, and intuitive platform. Patient adoption increased significantly within the first month.",
    image: "/landing/project2.jpg",
    name: "Dr. Amara Mensah",
    role: "Chief Pharmacist, RxBridge Health",
  },
  {
    title: "Elevated our compliance workflow beyond expectations",
    body: "Working with them on our regulatory dashboard was seamless. They understood the nuances of pharmaceutical documentation and delivered something truly exceptional.",
    image: "/landing/project3.jpg",
    name: "Kofi Asante",
    role: "Compliance Director, PharmaTrace",
  },
  {
    title: "Professional, precise, and results-driven",
    body: "Our lab reporting tool went from a spreadsheet nightmare to a fully visualized, real-time dashboard. The attention to detail in every screen was remarkable.",
    image: "/landing/project4.jpg",
    name: "Esi Boateng",
    role: "Research Lead, ClinPath Labs",
  },
];

function Clients() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto flex flex-col gap-24">
      {/* Latest Clients Table */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Latest Clients
          </p>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 md:text-xl text-sm pb-4 border-b border-black/10 text-black/90">
            <span className="w-10">#</span>
            <span>Company Name</span>
            <span>Industry</span>
            <span>Year</span>
          </div>

          {clients.map((client, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr_1fr_auto] gap-4 py-5 border-b md:text-base text-sm border-black/10 text-black"
            >
              <span className="w-10">{client.number}</span>
              <span className="font-medium">{client.name}</span>
              <span>{client.industry}</span>
              <span>{client.year}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Client Reviews
          </p>
        </div>

        <div className="flex flex-col">
          {reviews.map((review, i) => (
            <div key={i} className="group cursor-default">
              <div className="flex flex-col md:flex-row gap-10 py-10">
                <div className="w-full md:w-72 aspect-4/3 relative  overflow-hidden shrink-0">
                  <Image
                    src={review.image}
                    alt={review.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={shimmer}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between gap-5 md:gap-0 flex-1">
                  <div className="flex flex-col gap-3">
                    <h3 className="font-semibold text-2xl text-black">
                      {review.title}
                    </h3>
                    <p className="text-black md:text-base text-sm leading-relaxed">
                      "{review.body}"
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-black/10 overflow-hidden relative shrink-0">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL={shimmer}
                      />
                    </div>
                    <div>
                      <p className="font-semibold md:text-base text-sm text-black">
                        {review.name}
                      </p>
                      <p className="text-black text-sm md:text-base">
                        {review.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Border below full row */}
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

export default Clients;
