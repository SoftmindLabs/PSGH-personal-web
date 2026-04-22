import Extras from "@/components/Numbers";

function Stats() {
  const stats = [
    {
      label: "Years of experience",
      value: "09+",
      className: "!bg-transparent !border-transparent",
    },
    {
      label: "Satisfied clients",
      value: "90+",
      className: "!bg-transparent !border-transparent",
    },
    {
      label: "Projects delivered",
      value: "90+",
      className: "!bg-transparent !border-transparent",
    },
  ];

  return (
    <section>
      <div className="block md:hidden ">
        <Extras
          gridCols={2}
          gridRows={2}
          color="black"
          redColor="black"
          numberClassName="text-4xl font-medium"
          labelClassName="text-black text-base  font-normal mt-2"
          stats={stats}
        />
      </div>
      <div className="w-[80%] hidden md:block    ">
        <Extras
          gridCols={3}
          gridRows={1}
          color="black"
          redColor="black"
          numberClassName="text-6xl font-medium"
          labelClassName="text-black text-xl font-normal mt-4"
          stats={stats}
        />
      </div>
    </section>
  );
}

export default Stats;
