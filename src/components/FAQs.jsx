"use client";
import { useState } from "react";

const faqs = [
  {
    question: "What information do you need to get started?",
    answer:
      "To begin, I'll need a clear understanding of your goals, target audience, brand guidelines (if available), and any specific features or design preferences you have in mind. I'll guide you through the details during our initial consultation.",
  },
  {
    question: "What do you charge for your services?",
    answer:
      "Pricing depends on the scope and complexity of the project. After an initial consultation, I'll provide a detailed quote tailored to your specific needs. I offer flexible packages for both small clinics and large pharmaceutical organizations.",
  },
  {
    question: "Can you work within our brand guidelines?",
    answer:
      "Absolutely. I work closely with your team to ensure every deliverable aligns with your existing brand identity — from color systems and typography to tone and compliance requirements.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes. I offer post-launch support packages that cover maintenance, updates, and feature additions. Pharmaceutical platforms often require ongoing iteration, and I'm here for the long term.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply reach out through the contact form or book a discovery call. We'll discuss your project, timeline, and goals — and take it from there.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto pt-20 md:pt-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Frequently Asked Questions
          </p>
        </div>

        <div className="flex flex-col divide-y divide-black/10 ">
          {faqs.map((faq, i) => (
            <div key={i} className={i === 0 ? "" : ""}>
              <button
                onClick={() => toggle(i)}
                className={`w-full flex items-center justify-between gap-6 text-left ${
                  i === 0 ? "pb-7" : "py-7"
                }`}
              >
                <span className="text-lg md:text-xl font-semibold text-black tracking-tight">
                  {faq.question}
                </span>
                <span className="shrink-0 text-black">
                  {openIndex === i ? (
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
                      <path
                        d="M7 2v10M2 7h10"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === i ? "max-h-60 pb-7" : "max-h-0"
                }`}
              >
                <p className="text-sm md:text-base text-black leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;
