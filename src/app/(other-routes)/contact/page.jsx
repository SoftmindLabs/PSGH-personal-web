import FAQs from "@/components/FAQs";
import HeroSection from "./_components/Hero";
import ContactForm from "./_components/Form";
export const metadata = {
  title: "Contact | Paul Donkor",
  description:
    "Get in touch with Paul Donkor for consultations, speaking engagements, or research collaborations.",
  icons: {
    icon: "/P.png",
  },
};
function Contact() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <FAQs />
    </>
  );
}

export default Contact;
