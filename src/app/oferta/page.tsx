import React from "react";
import Header from "../components/Header";
import Link from "next/link";
import Image from "next/image";
import Title from "../components/Title";

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
      <section className="container">
        <div className="flex flex-col items-center">
          <Title heading={data.heading} description={data.paragraph}></Title>
          <div className="flex flex-wrap gap-10 justify-center mt-20">
            {/* To jest kontener na Linki do podstron oferty */}
            {Categories.map((category) => (
              <Link
                key={category.name}
                className=" w-40 h-30 p-4 flex flex-col  items-center gap-1 text-center hover:border-3 rounded-xl border-primary transition-all duration-fast ease-in-out "
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
    </>
  );
};

export default Offer;
