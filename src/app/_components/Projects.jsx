import Image from "next/image";
import { shimmer } from "@/lib/placeholder";

const projects = [
  {
    title: "PillPath - Medication Tracker App",
    image: "/landing/project3.jpg",
    tags: ["Mobile Design", "UX Research", "Development"],
  },
  {
    title: "RxVault - Prescription Management System",
    image: "/landing/project4.jpg",
    tags: ["Web App", "Dashboard", "Branding"],
  },
  {
    title: "ClinicalEdge - Trial Data Portal",
    image: "/landing/project3.jpg",
    tags: ["Data Viz", "UI Design", "React"],
  },
  {
    title: "MedConnect - Patient-Pharmacist Platform",
    image: "/landing/project5.webp",
    tags: ["Web Design", "Prototyping", "Figma"],
  },
];

function Projects() {
  return (
    <section className="w-[95%]  px-2 md:px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase  pl-3">
            Selected Projects
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col gap-1 md:gap-3">
              <div className="w-full aspect-video relative  overflow-hidden group">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  placeholder="blur"
                  blurDataURL={shimmer}
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-start gap-3 md:gap-0  md:items-center md:flex-row flex-col md:justify-between py-4">
                <p className="font-semibold text-sm md:text-lg ">
                  {project.title}
                </p>
                <div className="flex gap-2 flex-wrap justify-end">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-black/20 rounded-full px-4 py-1 text-xs md:text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
