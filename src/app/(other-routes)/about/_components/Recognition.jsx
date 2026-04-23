const awards = [
  {
    number: "(01)",
    title: "PSGH President of the Year",
    body: "PHARMACEUTICAL SOCIETY OF GHANA",
  },
  {
    number: "(02)",
    title: "Excellence in Clinical Pharmacy",
    body: "GHANA HEALTH SERVICE AWARDS",
  },
  {
    number: "(03)",
    title: "Best Pharmacist in Public Health",
    body: "WHO GHANA OFFICE",
  },
  {
    number: "(04)",
    title: "Outstanding Research Contribution",
    body: "UNIVERSITY OF GHANA",
  },
  {
    number: "(05)",
    title: "Pharmaceutical Innovation Award",
    body: "AFRICA HEALTH SUMMIT",
  },
  {
    number: "(06)",
    title: "Community Pharmacy Champion",
    body: "GHANA MEDICAL ASSOCIATION",
  },
];

function Awards() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto pt-20 md:pt-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Awards & Recognition
          </p>
        </div>

        <div className="flex flex-col">
          {awards.map((award, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-6 py-7 border-b border-black/10"
            >
              <p className="text-black text-xs md:text-base shrink-0">
                {award.number}
              </p>
              <h3 className="font-bold text-xl md:text-3xl text-black tracking-tighter flex-1 md:px-6">
                {award.title}
              </h3>
              <p className="text-black text-xs md:text-sm uppercase tracking-wide md:shrink-0 md:text-right">
                {award.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
