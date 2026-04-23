import HeroSection from "./_components/Hero";
import KnowMe from "./_components/Know";
import CoreValues from "./_components/CoreValue";
import JobExperience from "./_components/Job";
import WorkProcess from "./_components/WorkPro";
import Awards from "./_components/Recognition";
export const metadata = {
  title: "About | Paul Donkor",
  description:
    "Learn more about Paul Donkor — his background, experience, and contributions to pharmacy in Ghana.",
  icons: {
    icon: "/P.png",
  },
};
function About() {
  return (
    <>
      <HeroSection />
      <KnowMe />
      <CoreValues />
      <JobExperience />
      <WorkProcess />
      <Awards />
    </>
  );
}

export default About;
