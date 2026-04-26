import ResearchList from "./_components/List";
import HeroSection from "./_components/Hero";

export const metadata = {
  title: "Research | Paul Donkor",
  description:
    "Get in touch with Paul Donkor for consultations, speaking engagements, or research collaborations.",
  icons: {
    icon: "/P.png",
  },
};
function Research() {
  return (
    <>
      <HeroSection />
      <ResearchList />
    </>
  );
}

export default Research;
