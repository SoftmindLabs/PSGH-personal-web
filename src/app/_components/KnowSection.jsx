import Extras from "./Extras";

function Know() {
  return (
    <>
      <section className="w-[95%] py-20 md:py-40 px-2 md:px-10 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
          <div className="md:sticky md:top-20">
            <p className="font-semibold text-base md:text-xl border-l-5 uppercase pl-3">
              About me
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="md:w-[80%] font-semibold text-xl md:text-4xl tracking-tighter">
              A passionate designer, developer, and problem-solver dedicated to
              crafting meaningful digital experiences. With 10 years of
              experience in the creative industry, I specialize in blending
              aesthetics with functionality to create designs that are not only
              visually stunning but also user-friendly and impactful.
            </h1>
            <div>
              <Extras />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Know;
