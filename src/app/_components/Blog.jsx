import Image from "next/image";
import { Calendar, Clock } from "lucide-react";

const posts = [
  {
    title: "Designing medication interfaces that reduce prescription errors",
    date: "March 12, 2025",
    read: "8 minute read",
    image: "/landing/project5.webp",
  },
  {
    title: "What good UX looks like in clinical trial data portals",
    date: "February 28, 2025",
    read: "5 minute read",
    image: "/landing/project2.jpg",
  },
  {
    title: "How design thinking is reshaping pharmaceutical compliance tools",
    date: "January 15, 2025",
    read: "6 minute read",
    image: "/landing/project3.jpg",
  },
  {
    title: "Building patient-first digital experiences in healthcare",
    date: "December 4, 2024",
    read: "4 minute read",
    image: "/landing/project4.jpg",
  },
];

function Blog() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto pt-20 md:pt-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Blog & Articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {posts.map((post, i) => (
            <div key={i} className="group flex flex-col gap-4 cursor-pointer">
              {/* Image */}
              <div className="w-full aspect-4/3 relative  overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-4 text-black text-sm">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={13} />
                  {post.read}
                </span>
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl text-black leading-snug tracking-tight">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
