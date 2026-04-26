import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";

function TextSection({ section }) {
  return (
    <div className="flex flex-col gap-6">
      {section.heading && (
        <h2 className="text-2xl md:text-4xl font-bold tracking-tight">
          {section.heading}
        </h2>
      )}
      {section.body && (
        <p className="text-black/80 leading-relaxed text-base md:text-lg">
          {section.body}
        </p>
      )}
      {section.bullets && (
        <ul className="flex flex-col gap-2 pl-5 list-disc text-black/80">
          {section.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
      {section.extra && (
        <p className="text-black/80 leading-relaxed text-base md:text-lg">
          {section.extra}
        </p>
      )}
      {section.quote && (
        <blockquote className="border-t border-b border-black/10 py-6 my-2">
          <p className="text-lg md:text-xl italic text-black/80 leading-relaxed">
            "{section.quote.text}"
          </p>
          <p className="mt-3 text-sm font-semibold">{section.quote.author}</p>
        </blockquote>
      )}
    </div>
  );
}

export default function BlogPostClient({ blog, related }) {
  const textSections = blog.sections?.filter((s) => s.type === "text") ?? [];
  const midImage = blog.sections?.find((s) => s.type === "image") ?? null;

  return (
    <main className="bg-white text-black">
      <div className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10 pt-24 pb-10">
        <p className="text-xs uppercase tracking-widest text-black/80 mb-4">
          {blog.category}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
          {blog.title}
        </h1>
        <div className="flex items-center gap-6 text-sm text-black/80">
          <span className="flex items-center gap-1.5">
            <Calendar size={13} />
            {blog.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={13} />
            {blog.read}
          </span>
        </div>
      </div>

      <div className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10">
        <div className="w-full aspect-video relative overflow-hidden">
          <Image
            src={blog.heroImage}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10 py-12">
        {textSections[0] && <TextSection section={textSections[0]} />}
      </div>

      {midImage && (
        <div className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10">
          <div className="w-full aspect-video relative overflow-hidden">
            <Image
              src={midImage.src}
              alt={midImage.alt}
              fill
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10 py-12 flex flex-col gap-12">
        {textSections.slice(1).map((section, i) => (
          <TextSection key={i} section={section} />
        ))}
      </div>

      {related?.length > 0 && (
        <section className="w-11/12 md:w-[95%] mx-auto px-2 md:px-10 pt-10 pb-20 border-t border-black/10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
            <div>
              <p className="font-semibold text-base md:text-xl border-l-4 border-black uppercase pl-3">
                Related Blogs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
              {related.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-4"
                >
                  <div className="w-full aspect-4/3 relative overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
