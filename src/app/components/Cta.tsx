import React from "react";
import AnimatedSection from "./AnimatedSection";

const bgImage = "/photos/v.avif";

const Cta = () => {
  return (
    <section
      className=" lg:py-12 lg:flex lg:justify-center text-center text-white relative bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-primary/20 z-5" />
      <div className="absolute inset-0 bg-black/30 z-5" />

      <div className=" z-10 relative overflow-hidden  lg:mx-8 lg:flex lg:max-w-6xl lg:w-full  lg:rounded-xl">
        <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2 mx-auto">
          <AnimatedSection direction="bottom" range={30}>
            <h2 className="text-2xl font-semibold md:text-3xl">Umów wizytę</h2>
          </AnimatedSection>

          <AnimatedSection direction="bottom" range={30}>
            <p className="mt-4 ">
              Zadbaj o zdrowie i komfort swojego uśmiechu. Skontaktuj się z nami
              i zaplanuj wizytę w dogodnym terminie.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="bottom" range={30}>
            <div className="inline-flex w-full mt-6 h-20 max-w-100">
              <a
                href="/kontakt"
                className="inline-flex items-center justify-center w-full px-6 py-2 duration-300 rounded-lg bg-primary/95 text-xl text-white hover:bg-primary hover:scale-102      "
              >
                Zarezerwuj termin
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Cta;
