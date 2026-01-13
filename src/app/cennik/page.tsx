"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { it } from "node:test";
import Title from "../components/Title";

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
    title: "Profilaktyka",
    content: [
      { name: "Przegląd stomatologiczny", price: "100" },
      { name: "Skaling", price: "200" },
      { name: "Piaskowanie", price: "180" },
    ],
  },
  {
    id: 3,
    title: "Leczenie",
    content: [
      { name: "Wypełnienie", price: "250" },
      { name: "Leczenie kanałowe", price: "900" },
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
        className={`bg-white rounded-full overflow-hidden  border border-primary/60 transition-all duration-300 
         `}
      >
        <div
          className="flex justify-between items-center p-3 cursor-pointer"
          onClick={onToggle}
        >
          <div className="text-l px-3 ">{title}</div>
          <div className="flex items-center">
            <Image
              src={`${isExpanded ? "/icons/minus.png" : "/icons/add.png"}`}
              alt="Rozwiń"
              width={20}
              height={20}
              className={`transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>
        </div>
      </div>
      <div
        className={`  px-2 mx-3 overflow-hidden transition-all duration-400 ${
          isExpanded ? "max-h-200 " : "max-h-0 "
        }`}
      >
        <table className="w-full p-2">
          <thead>
            <tr className="bg-primary/30">
              <th className="text-start p-1.5" scope="col">
                Nazwa
              </th>
              <th scope="col">Cena</th>
            </tr>
          </thead>
          <tbody>
            {content.map((el) => (
              <tr className="odd:bg-white odd:border odd:border-secondary-L even:bg-secondary-L ">
                <td className="p-1.5">{el.name}</td>
                <td className="text-center">{el.price}</td>
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
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      <Header imageUrl="headers/header.png">Cennik</Header>
      <Title heading={"Zapoznaj się z naszym cennikiem"}></Title>
      <div className="flex flex-col gap-1 max-w-md mx-auto">
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
  );
};

export default PriceList;
