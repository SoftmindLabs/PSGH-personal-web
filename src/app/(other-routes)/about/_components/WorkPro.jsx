const steps = [
  {
    number: "/01",
    title: "Patient Assessment",
    description:
      "Every engagement begins with a thorough review of the patient's medical history, current medications, and clinical needs to identify risks and opportunities for better care.",
  },
  {
    number: "/02",
    title: "Medication Planning",
    description:
      "Based on assessment findings, I develop a structured medication plan aligned with clinical guidelines, therapeutic goals, and the patient's individual circumstances.",
  },
  {
    number: "/03",
    title: "Dispensing & Counselling",
    description:
      "Accurate dispensing is paired with clear, empathetic patient counselling — ensuring every patient understands their treatment, dosage, and potential interactions.",
  },
  {
    number: "/04",
    title: "Monitoring & Review",
    description:
      "Ongoing monitoring of therapeutic outcomes and side effects ensures timely adjustments, improving safety and long-term medication adherence.",
  },
];

function WorkProcess() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto ">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Work Process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 py-10 border-b border-black/10"
            >
              <p className="text-black text-base">{step.number}</p>
              <h3 className="font-bold text-3xl md:text-5xl text-black tracking-tighter">
                {step.title}
              </h3>
              <p className="text-black text-sm md:text-base leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;
