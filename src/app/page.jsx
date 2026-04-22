import HeroSection from "./_components/Hero";
import Know from "./_components/KnowSection";
import Projects from "./_components/Projects";
import Services from "./_components/Services";
import Clients from "./_components/Client";
import FAQs from "./_components/FAQs";
import Blog from "./_components/Blog";
function Landing() {
  return (
    <>
      <HeroSection />
      <Know />
      <Projects />
      <Services />
      <Clients />
      <FAQs />
      <Blog />
    </>
  );
}

export default Landing;
