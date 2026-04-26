import { getBlogBySlug, getRelatedBlogs } from "@/data/blog";
import { getBlogDetailBySlug } from "@/data/details";
import { notFound } from "next/navigation";
import BlogPostClient from "./_components/Client";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  return {
    title: blog ? `${blog.title} | Blog` : "Post Not Found",
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);
  if (!blog) notFound();

  const details = getBlogDetailBySlug(slug);
  const related = getRelatedBlogs(slug);

  return <BlogPostClient blog={{ ...blog, ...details }} related={related} />;
}
