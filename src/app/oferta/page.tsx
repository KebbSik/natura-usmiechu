import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Title from "../components/Title";
import ZachoSVG from "../components/svgs/services/ZachoSVG";
import ChirurgiaSVG from "../components/svgs/services/ChirurgiaSVG";
import RadioSVG from "../components/svgs/services/RadioSVG";
import ProtetykaSVG from "../components/svgs/services/ProtetykaSVG";
import OrtoSVG from "../components/svgs/services/OrtoSVG";
import PerioSVG from "../components/svgs/services/PerioSVG";
import ImplantSVG from "../components/svgs/services/ImplantSVG";
import AnimatedSection from "../components/AnimatedSection";

const Categories = [
  {
    name: "Stomatologia zachowawcza",
    src: "/categories/cat1.svg",
    link: "/oferta/zachowawcza",
  },
  {
    name: "Implantologia",
    src: "/categories/cat1.svg",
    link: "/oferta/implantologia",
  },
  {
    name: "Chirurgia stomatologiczna",
    src: "/categories/cat1.svg",
    link: "/oferta/chirurgia",
  },
  {
    name: "Protetyka",
    src: "/categories/cat1.svg",
    link: "/oferta/protetyka",
  },
  {
    name: "Ortodoncja",
    src: "/categories/cat1.svg",
    link: "/oferta/ortodoncja",
  },
  {
    name: "Periodontologia",
    src: "/categories/cat1.svg",
    link: "/oferta/periodontologia",
  },
  {
    name: "Radiologia",
    src: "/categories/cat1.svg",
    link: "/oferta/radiologia",
  },
];

const data = {
  heading: "Zadbaj o zdrowy i piękny uśmiech",
  paragraph: "Korzystaj z profesjonalnych usług dopasowanych do Twoich potrzeb",
};

const Offer = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Strona główna",
                item: "https://naturausmiechu.pl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Oferta",
                item: "https://naturausmiechu.pl/oferta",
              },
            ],
          }),
        }}
      />
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Oferta
      </Header>
      <section className="container mb-10">
        <div className="flex flex-col items-center px-3">
          <Title heading={data.heading} description={data.paragraph}></Title>
          {/* To jest kontener na Linki do podstron oferty */}
          <AnimatedSection direction="bottom" range={30}>
            <div className="flex flex-wrap p-5 gap-2 sm:gap-5  lg:gap-10 max-w-240 justify-center  text-primary">
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/zachowawcza"}
              >
                <ZachoSVG width={62} height={82} />
                <div className="flex-1 flex items-center">
                  Stomatologia zachowawcza
                </div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/chirurgia"}
              >
                <ChirurgiaSVG width={62} height={82} />
                <div className="flex-1 flex items-center  ">
                  Chirurgia stomatologiczna
                </div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/radiologia"}
              >
                <RadioSVG width={62} height={82} />
                <div className="flex-1 flex items-center ">Radiologia</div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/protetyka"}
              >
                <ProtetykaSVG width={62} height={82} />
                <div className="flex-1 flex items-center ">Protetyka</div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/ortodoncja"}
              >
                <OrtoSVG width={62} height={82} />
                <div className="flex-1 flex items-center ">Ortodoncja</div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/periodontologia"}
              >
                <PerioSVG width={62} height={82} />
                <div className="flex-1 flex items-center ">Periodontologia</div>
              </Link>
              <Link
                className="w-full max-w-60 h-30 sm:h-30  border md:w-60  p-4 flex flex-col  items-center gap-1 text-center hover:bg-primary/80 hover:text-white rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={"/oferta/implantologia"}
              >
                <ImplantSVG width={62} height={62} />
                <div className="flex-1 flex items-center ">Implantologia</div>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Offer;
