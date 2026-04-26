export const blogs = [
  {
    id: 1,
    slug: "designing-medication-interfaces",
    title: "Designing medication interfaces that reduce prescription errors",
    category: "Design",
    date: "March 12, 2025",
    read: "8 minute read",
    image: "/landing/project5.webp",
  },
  {
    id: 2,
    slug: "ux-in-clinical-trial-portals",
    title: "What good UX looks like in clinical trial data portals",
    category: "Insights",
    date: "February 28, 2025",
    read: "5 minute read",
    image: "/landing/project2.jpg",
  },
  {
    id: 3,
    slug: "design-thinking-pharmaceutical-compliance",
    title: "How design thinking is reshaping pharmaceutical compliance tools",
    category: "Business",
    date: "January 15, 2025",
    read: "6 minute read",
    image: "/landing/project3.jpg",
  },
  {
    id: 4,
    slug: "patient-first-digital-experiences",
    title: "Building patient-first digital experiences in healthcare",
    category: "Creativity",
    date: "December 4, 2024",
    read: "4 minute read",
    image: "/landing/project4.jpg",
  },
];

export function getBlogBySlug(slug) {
  return blogs.find((b) => b.slug === slug) ?? null;
}

export function getRelatedBlogs(slug) {
  return blogs.filter((b) => b.slug !== slug).slice(0, 2);
}
