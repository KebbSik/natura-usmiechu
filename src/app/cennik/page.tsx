"use client";

import React, { useRef, useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { it } from "node:test";
import Title from "../components/Title";
import VisitUs from "../components/VisitUs";
import Cta from "../components/Cta";

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
      { name: "Porada lekarska / wizyta adaptacyjna", price: "150 zł" },
      { name: "Znieczulenie miejscowe", price: "gratis" },
      { name: "Wypełnienie w zębie mlecznym", price: "200 zł" },
      { name: "Dewitalizacja zęba mlecznego", price: "100 zł" },
      { name: "Leczenie kanałowe zęba mlecznego", price: "200 zł" },
      {
        name: "Wypełnienie w zębie (w zależności od ilości powierzchni)",
        price: "350 – 450 zł",
      },
      { name: "Licówka kompozytowa / bonding", price: "550 – 650 zł" },
      { name: "Dewitalizacja zęba", price: "150 zł" },
      {
        name: "Leczenie kanałowe – 1 kanał (bez odbudowy)",
        price: "700 zł",
      },
      { name: "Leczenie kanałowe – 2 kanały", price: "850 zł" },
      { name: "Leczenie kanałowe – 3 kanały", price: "1 100 zł" },
      { name: "Leczenie kanałowe – 4 kanały", price: "1 250 zł" },
      {
        name: "Reendo (poprawienie starego leczenia kanałowego)",
        price: "+30%",
      },
      {
        name: "Odbudowa po leczeniu kanałowym na włóknie",
        price: "400 – 500 zł",
      },
      {
        name: "Usunięcie starego wkładu koronowo-korzeniowego",
        price: "300 – 500 zł",
      },
      { name: "Zamknięcie perforacji MTA", price: "300 – 450 zł" },
      { name: "Wybielanie lampą Beyond", price: "900 zł" },
      {
        name: "Wybielanie Opalescence (zestaw domowy)",
        price: "1 000 zł",
      },
      { name: "Wybielanie Prevdent", price: "1 500 zł" },
      {
        name: "Usuwanie przebarwień aparatem Icon",
        price: "200 zł / ząb",
      },
    ],
  },

  {
    id: 2,
    title: "Implantologia",
    content: [
      { name: "Konsultacja implantologiczna", price: "150 zł" },
      {
        name: "Konsultacja implantologiczna z wyciskami, CBCT i planem leczenia",
        price: "400 zł",
      },
      {
        name: "Wprowadzenie implantu + szablon nawigacyjny (1 punkt)",
        price: "3 500 zł",
      },
      { name: "Każdy kolejny punkt", price: "+50 zł" },
      {
        name: "Korona porcelanowa z łącznikiem",
        price: "3 000 – 4 000 zł",
      },
      { name: "Proteza oparta na 2 implantach", price: "wycena indywidualna" },
      { name: "Proteza oparta na 4 implantach", price: "wycena indywidualna" },
      {
        name: "Podniesienie zatoki (z biomateriałem)",
        price: "2 000 – 5 000 zł",
      },
      { name: "Odbudowa kości", price: "wycena indywidualna" },
    ],
  },

  {
    id: 3,
    title: "Chirurgia stomatologiczna",
    content: [
      { name: "Konsultacja chirurgiczna", price: "150 zł" },
      { name: "Usunięcie zęba mlecznego", price: "200 zł" },
      { name: "Usunięcie zęba stałego", price: "350 – 500 zł" },
      {
        name: "Usunięcie zęba poprzez dłutowanie wewnątrzzębodołowe",
        price: "od 500 zł",
      },
      {
        name: "Usunięcie górnego zęba mądrości",
        price: "od 600 zł",
      },
      {
        name: "Usunięcie dolnego zęba mądrości",
        price: "od 800 zł",
      },
      {
        name: "Usunięcie zęba częściowo zatrzymanego",
        price: "800 – 1 500 zł",
      },
      {
        name: "Usunięcie zęba całkowicie zatrzymanego",
        price: "1 000 – 2 000 zł",
      },
      { name: "Nacięcie ropnia", price: "200 zł" },
      { name: "Szycie chirurgiczne", price: "100 zł" },
      { name: "Wydłużenie korony zęba", price: "350 – 400 zł" },
      {
        name: "Plastyka połączenia ustno-zatokowego",
        price: "600 – 800 zł",
      },
      { name: "Plastyka wędzidełka", price: "500 zł" },
      {
        name: "Odsłonięcie zatrzymanego zęba z przyklejeniem zamka",
        price: "od 1 200 zł",
      },
      { name: "Usunięcie kaptura dziąsłowego", price: "300 zł" },
      { name: "Pobranie wycinka do badania hist-pat", price: "400 zł" },
      {
        name: "Wycięcie zmiany błony śluzowej jamy ustnej",
        price: "400 – 600 zł",
      },
      {
        name: "Resekcja wierzchołka korzenia",
        price: "od 1 200 zł",
      },
      {
        name: "Pourazowe zaopatrzenie zwichniętego zęba",
        price: "400 zł",
      },
      {
        name: "Pogłębienie przedsionka jamy ustnej",
        price: "600 zł",
      },
      { name: "Biostymulacja laserem", price: "100 zł" },
      { name: "Wyłuszczenie torbieli", price: "wycena indywidualna" },
      {
        name: "Zabiegi z przeszczepem tkanek i augmentacją kości",
        price: "wycena indywidualna",
      },
      {
        name: "A-PRF / I-PRF (fibryna bogatopłytkowa)",
        price: "300 – 500 zł",
      },
      {
        name: "Płukanie zębodołu z aplikacją leku",
        price: "50 zł",
      },
    ],
  },

  {
    id: 4,
    title: "Protetyka",
    content: [
      { name: "Konsultacja protetyczna", price: "150 zł" },
      {
        name: "Korona pełnoceramiczna / na podbudowie cyrkonowej",
        price: "1 800 zł",
      },
      { name: "Licówka pełnoceramiczna", price: "1 800 zł" },
      {
        name: "Korona tymczasowa (laboratoryjna)",
        price: "300 zł",
      },
      { name: "Proteza szkieletowa", price: "3 000 zł" },
      { name: "Proteza akrylowa ruchoma", price: "1 600 zł" },
      { name: "Proteza akrylowa całkowita", price: "2 200 zł" },
      {
        name: "Proteza na zatrzaskach / zasuwach / teleskopach",
        price: "wycena indywidualna",
      },
      {
        name: "Wkład koronowo-korzeniowy metalowy",
        price: "450 – 500 zł",
      },
      {
        name: "Wkład koronowo-korzeniowy pełnoceramiczny",
        price: "900 zł",
      },
      { name: "Onlay kompozytowy", price: "800 zł" },
      { name: "Onlay pełnoceramiczny", price: "1 500 zł" },
    ],
  },

  {
    id: 5,
    title: "Ortodoncja",
    content: [
      { name: "Konsultacja ortodontyczna", price: "200 zł" },
      {
        name: "Konsultacja ortodontyczna z wyciskami i RTG",
        price: "400 zł",
      },
      {
        name: "Aparat stały metalowy (1 łuk)",
        price: "3 500 zł",
      },
      {
        name: "Aparat stały estetyczny (1 łuk)",
        price: "5 000 zł",
      },
      { name: "Aparat ruchomy", price: "1 000 – 1 500 zł" },
      {
        name: "Wizyta kontrolna – aparat ruchomy",
        price: "150 zł",
      },
      {
        name: "Wizyta kontrolna – aparat stały (1 łuk)",
        price: "200 zł",
      },
      {
        name: "Wizyta kontrolna – aparat stały (2 łuki)",
        price: "250 zł",
      },
      {
        name: "Wizyta kontrolna – bez wymiany łuków",
        price: "100 zł",
      },
      {
        name: "Zdjęcie aparatu stałego (2 łuki) + retainery",
        price: "2 300 zł",
      },
      {
        name: "Zdjęcie aparatu stałego (1 łuk) + retainer",
        price: "1 150 zł",
      },
    ],
  },

  {
    id: 6,
    title: "Periodontologia",
    content: [
      {
        name: "Skaling, piaskowanie, fluoryzacja",
        price: "350 zł",
      },
      { name: "Skaling", price: "250 zł" },
      { name: "Fluoryzacja", price: "100 zł" },
      {
        name: "Kiretaż zamknięty (połowa łuku)",
        price: "300 zł",
      },
    ],
  },

  {
    id: 7,
    title: "Radiologia",
    content: [
      { name: "RTG punktowe", price: "40 zł" },
      { name: "RTG pantomograficzne", price: "100 zł" },
      {
        name: "Tomografia szczęki i żuchwy",
        price: "300 zł",
      },
      { name: "Tomografia jednego rejonu", price: "150 zł" },
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
        className={`bg-white rounded-full overflow-hidden  border border-primary/60 transition-all duration-normal hover:bg-primary/20 
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
        className={`  md:px-4 overflow-hidden transition-all duration-500 ${
          isExpanded ? "max-h-1000" : "max-h-0 "
        }`}
      >
        <table className="w-full p-2 my-2 ">
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

  const itemRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const toggleExpand = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }

    setExpandedId(id);

    setTimeout(() => {
      requestAnimationFrame(() => {
        const el = itemRefs.current[id];
        if (!el) return;

        const yOffset = -100; // wysokość headera
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      });
    }, 550);
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
              <div
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el;
                }}
              >
                <AccordionItem
                  // key={item.id}
                  title={item.title}
                  content={item.content}
                  isExpended={expandedId === item.id ? true : false}
                  onToggle={() => toggleExpand(item.id)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Cta />
    </section>
  );
};

export default PriceList;
