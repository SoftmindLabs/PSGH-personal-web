const reasons = [
  {
    title: "Evidence-based practice –",
    description:
      "Every recommendation I make is grounded in current pharmaceutical research and clinical guidelines.",
  },
  {
    title: "Patient-centred care –",
    description:
      "I work closely with patients and healthcare teams to ensure medication plans are safe, effective, and tailored.",
  },
  {
    title: "Full-process support –",
    description:
      "From prescription review to post-dispensing counselling, I'm involved at every stage of the care pathway.",
  },
  {
    title: "Attention to detail –",
    description:
      "Precision is non-negotiable in pharmacy. I refine every element of a patient's medication regimen for safety.",
  },
  {
    title: "Reliable & on time –",
    description:
      "Timely medication management without compromising accuracy or patient outcomes.",
  },
  {
    title: "Results-focused –",
    description:
      "My work is designed to improve health outcomes, not just fulfil prescriptions.",
  },
];

function KnowMe() {
  return (
    <section className="w-[95%] py-20 md:py-40 px-2 md:px-10 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Why choose me
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h1 className="font-semibold text-xl md:text-4xl tracking-tighter">
            Hi, I'm Paul Donkor — a pharmacist and public health advocate with a
            passion for advancing pharmaceutical care in Ghana. My work bridges
            clinical expertise with community impact, ensuring medicines are
            used safely, effectively, and equitably.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {reasons.map((reason, i) => (
              <div key={i} className="flex items-start gap-3 text-black">
                <span className="mt-[0.7em] w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                <p className="text-sm md:text-xl leading-relaxed">
                  <span className="font-bold">{reason.title}</span>{" "}
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default KnowMe;
