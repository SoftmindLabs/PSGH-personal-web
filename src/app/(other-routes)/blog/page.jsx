import BlogClient from "./_components/Client";

export const metadata = {
  title: "Blog | Paul Donkor",
  description:
    "Get in touch with Paul Donkor for consultations, speaking engagements, or research collaborations.",
  icons: {
    icon: "/P.png",
  },
};
function Blog() {
  return (
    <>
      <BlogClient />
    </>
  );
}

export default Blog;
