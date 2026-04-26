const jobs = [
  {
    role: "President",
    company: "Pharmaceutical Society of Ghana",
    period: "Jan 2023 – Present",
  },
  {
    role: "Senior Pharmacist",
    company: "Korle Bu Teaching Hospital",
    period: "Mar 2019 – Dec 2022",
  },
  {
    role: "Clinical Pharmacist",
    company: "University of Ghana Medical Centre",
    period: "Jun 2015 – Feb 2019",
  },
  {
    role: "Pharmacy Intern",
    company: "Ghana Health Service",
    period: "Jan 2013 – May 2015",
  },
];

function JobExperience() {
  return (
    <section className="w-[95%] px-2 md:px-10 mx-auto py-20 md:py-40">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        <div className="md:sticky md:top-20">
          <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
            Job Experience
          </p>
        </div>

        <div className="flex flex-col">
          {jobs.map((job, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 py-8 border-b border-black/10"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm md:text-base uppercase tracking-wide text-black">
                  {job.role}
                </p>
                <p className="text-sm md:text-base text-black shrink-0">
                  {job.period}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-3xl md:text-5xl text-black tracking-tighter ">
                  {job.company}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobExperience;
