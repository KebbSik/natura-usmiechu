"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { it } from "node:test";
import Title from "../components/Title";
import VisitUs from "../components/VisitUs";

interface Props {
  title: string;
  content: PriceItem[];
  isExpended: boolean;
  onToggle: () => void;
}

type PriceItem = {
  name: string;
  price: string;
};

const data = [
  {
    id: 1,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
  {
    id: 2,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
  {
    id: 3,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
  {
    id: 4,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
  {
    id: 5,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
  {
    id: 6,
    title: "Stomatologia zachowawcza",
    content: [
      {
        name: "Badanie stomatologiczne / wizyta adaptacyjna / porada lekarska",
        price: "150",
      },
      {
        name: "Znieczulenie stomatologiczne",
        price: "Gratis",
      },
      {
        name: "Wypełnienie kompozytowe przyszyjkowe",
        price: "300–400",
      },
      {
        name: "Wypełnienie kompozytowe w zębie stałym",
        price: "400–500",
      },
      {
        name: "Licówka kompozytowa / bonding (jeden ząb)",
        price: "550–650",
      },
      {
        name: "Opatrunek leczniczy",
        price: "250",
      },
      {
        name: "Wizyta przeciwbólowa",
        price: "250",
      },
    ],
  },
];

function AccordionItem({
  title,
  content,
  isExpended: isExpanded,
  onToggle,
}: Props) {
  return (
    <>
      <div
        className={`bg-white rounded-full overflow-hidden  border border-primary/60 transition-all duration-normal
         `}
      >
        <div
          className="flex justify-between items-center p-3 cursor-pointer"
          onClick={onToggle}
        >
          <div className="text-l px-3 ">{title}</div>
          <div className="flex items-center  select-none">
            <Image
              src={`${isExpanded ? "/icons/minus.png" : "/icons/add.png"}`}
              alt="Rozwiń"
              width={20}
              height={20}
              className={`transition-all duration-normal ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`  md:px-4 overflow-hidden transition-all duration-slow ${
          isExpanded ? "max-h-200 " : "max-h-0 "
        }`}
      >
        <table className="w-full p-2">
          <thead>
            <tr className="bg-primary/30">
              <th className="text-start p-1.5" scope="col">
                Nazwa
              </th>
              <th className="p-1.5" scope="col">
                Cena
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((el) => (
              <tr
                key={el.name}
                className="odd:bg-white odd:border odd:border-secondary-L even:bg-secondary-L "
              >
                <td className="p-1.5">{el.name}</td>
                <td className="text-center text-nowrap p-1.5">{el.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
const PriceList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(null);
      // setTimeout(() => {
      setExpandedId(id);
      // }, 100);
    }
    // setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="min-h-screen">
      <Header objectFit="center_50%" imageUrl="/photos/v_12.avif">
        Cennik
      </Header>
      <div className="container mb-10">
        <div className="flex flex-col items-center px-3 ">
          <Title heading={"Zapoznaj się z naszym cennikiem"}></Title>
          <div className="flex flex-col gap-1  mx-auto py-10">
            {data.map((item) => (
              <AccordionItem
                key={item.id}
                title={item.title}
                content={item.content}
                isExpended={expandedId === item.id ? true : false}
                onToggle={() => toggleExpand(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
      <VisitUs />
    </section>
  );
};

export default PriceList;
