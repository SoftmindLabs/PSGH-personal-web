import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

import { blogs } from "@/data/blog";

function Blogs({ activeCategory }) {
  const filtered =
    activeCategory === "All blogs"
      ? blogs
      : blogs.filter((b) => b.category === activeCategory);

  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto pt-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Blog & Articles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
          {filtered.length === 0 ? (
            <p className="text-gray-400 col-span-2">
              No posts in this category yet.
            </p>
          ) : (
            filtered.map((post) => (
              // inside your map:
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex flex-col gap-4"
              >
                {/* Image + hover overlay */}
                <div className="w-full aspect-4/3 relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Arrow circle */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white rounded-full p-3 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
                      <ArrowUpRight size={22} className="text-black" />
                    </div>
                  </div>
                </div>

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

                <h3 className="font-semibold text-xl text-black leading-snug tracking-tight">
                  {post.title}
                </h3>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
