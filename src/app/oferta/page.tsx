import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Title from "../components/Title";
import VisitUs from "../components/VisitUs";

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
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Oferta
      </Header>
      <section className="container mb-10">
        <div className="flex flex-col items-center px-3">
          <Title heading={data.heading} description={data.paragraph}></Title>
          <div className="flex flex-wrap p-5 gap-2 sm:gap-5  lg:gap-10 max-w-240 justify-center">
            {/* To jest kontener na Linki do podstron oferty */}
            {Categories.map((category) => (
              <Link
                key={category.name}
                className="w-full max-w-60 h-25 sm:h-30  border md:w-40  p-4 flex flex-col  items-center gap-1 text-center hover:border-3 rounded-xl border-primary transition-all duration-fast ease-in-out "
                href={category.link}
              >
                <Image
                  src={category.src}
                  alt={category.name}
                  width={40}
                  height={40}
                />
                <div className="flex-1 flex items-center">{category.name}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* <VisitUs /> */}
    </>
  );
};

export default Offer;
