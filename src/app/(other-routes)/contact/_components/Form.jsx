"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ArrowRight } from "lucide-react";

function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formRef.current,
        "YOUR_PUBLIC_KEY",
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto  md:pt-30">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Get In Touch
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="font-bold text-3xl md:text-5xl text-black tracking-tighter">
              Send Message
            </h2>
            <p className="text-black text-sm md:text-base leading-relaxed md:w-[80%] mt-5">
              Feel free to reach out with any questions or ideas you'd like to
              explore. I'm excited to learn more about your needs and how we can
              make it happen.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-8 mt-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
              <input
                type="text"
                name="from_name"
                placeholder="Full Name"
                required
                className="bg-transparent border-b border-black/20 pb-5 text-black text-sm md:text-base placeholder:text-black outline-none focus:border-black transition-colors"
              />
              <input
                type="email"
                name="from_email"
                placeholder="Email Address"
                required
                className="bg-transparent border-b border-black/20 pb-5 text-black text-sm md:text-base placeholder:text-black outline-none focus:border-black transition-colors"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="bg-transparent border-b border-black/20 pb-5 text-black text-sm md:text-base placeholder:text-black outline-none focus:border-black transition-colors"
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="bg-transparent border-b border-black/20 pb-5 text-black text-sm md:text-base placeholder:text-black outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="mt-8">
              <textarea
                name="message"
                placeholder="Message"
                required
                rows={8}
                className="w-full bg-transparent border-b border-black/20 pb-5 text-black text-sm md:text-base placeholder:text-black outline-none focus:border-black transition-colors resize-none"
              />
            </div>
            <div className="flex items-center gap-6">
              <button
                type="submit"
                disabled={status === "sending"}
                className="flex items-center gap-2 bg-black text-white px-8 py-4 text-sm md:text-base font-medium hover:bg-black/80 transition-colors disabled:bg-black/40"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
                <ArrowRight size={16} />
              </button>

              {status === "success" && (
                <p className="text-sm text-black">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-sm text-black">
                  Something went wrong. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
