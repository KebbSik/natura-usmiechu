"use client";

import { useRef, useState } from "react";
import Cta from "../components/Cta";
import Header from "../components/Header";
import Title from "../components/Title";
import AccordionItem from "./AccordionItem";
import { PricingCategory } from "../types/pricing";

const data = [
  {
    id: 1,
    title: "Stomatologia zachowawcza",
    content: [
      { nazwa: "Porada lekarska / wizyta adaptacyjna", cena: "150 zł" },
      { nazwa: "Znieczulenie miejscowe", cena: "gratis" },
      { nazwa: "Wypełnienie w zębie mlecznym", cena: "200 zł" },
      { nazwa: "Dewitalizacja zęba mlecznego", cena: "100 zł" },
      { nazwa: "Leczenie kanałowe zęba mlecznego", cena: "200 zł" },
      {
        nazwa: "Wypełnienie w zębie (w zależności od ilości powierzchni)",
        cena: "350 – 450 zł",
      },
      { nazwa: "Licówka kompozytowa / bonding", cena: "550 – 650 zł" },
      { nazwa: "Dewitalizacja zęba", cena: "150 zł" },
      {
        nazwa: "Leczenie kanałowe – 1 kanał (bez odbudowy)",
        cena: "700 zł",
      },
      { nazwa: "Leczenie kanałowe – 2 kanały", cena: "850 zł" },
      { nazwa: "Leczenie kanałowe – 3 kanały", cena: "1 100 zł" },
      { nazwa: "Leczenie kanałowe – 4 kanały", cena: "1 250 zł" },
      {
        nazwa: "Reendo (poprawienie starego leczenia kanałowego)",
        cena: "+30%",
      },
      {
        nazwa: "Odbudowa po leczeniu kanałowym na włóknie",
        cena: "400 – 500 zł",
      },
      {
        nazwa: "Usunięcie starego wkładu koronowo-korzeniowego",
        cena: "300 – 500 zł",
      },
      { nazwa: "Zamknięcie perforacji MTA", cena: "300 – 450 zł" },
      { nazwa: "Wybielanie lampą Beyond", cena: "900 zł" },
      {
        nazwa: "Wybielanie Opalescence (zestaw domowy)",
        cena: "1 000 zł",
      },
      { nazwa: "Wybielanie Prevdent", cena: "1 500 zł" },
      {
        nazwa: "Usuwanie przebarwień aparatem Icon",
        cena: "200 zł / ząb",
      },
    ],
  },

  {
    id: 2,
    title: "Implantologia",
    content: [
      { nazwa: "Konsultacja implantologiczna", cena: "150 zł" },
      {
        nazwa:
          "Konsultacja implantologiczna z wyciskami, CBCT i planem leczenia",
        cena: "400 zł",
      },
      {
        nazwa: "Wprowadzenie implantu + szablon nawigacyjny (1 punkt)",
        cena: "3 500 zł",
      },
      { nazwa: "Każdy kolejny punkt", cena: "+50 zł" },
      {
        nazwa: "Korona porcelanowa z łącznikiem",
        cena: "3 000 – 4 000 zł",
      },
      { nazwa: "Proteza oparta na 2 implantach", cena: "wycena indywidualna" },
      { nazwa: "Proteza oparta na 4 implantach", cena: "wycena indywidualna" },
      {
        nazwa: "Podniesienie zatoki (z biomateriałem)",
        cena: "2 000 – 5 000 zł",
      },
      { nazwa: "Odbudowa kości", cena: "wycena indywidualna" },
    ],
  },

  {
    id: 3,
    title: "Chirurgia stomatologiczna",
    content: [
      { nazwa: "Konsultacja chirurgiczna", cena: "150 zł" },
      { nazwa: "Usunięcie zęba mlecznego", cena: "200 zł" },
      { nazwa: "Usunięcie zęba stałego", cena: "350 – 500 zł" },
      {
        nazwa: "Usunięcie zęba poprzez dłutowanie wewnątrzzębodołowe",
        cena: "od 500 zł",
      },
      {
        nazwa: "Usunięcie górnego zęba mądrości",
        cena: "od 600 zł",
      },
      {
        nazwa: "Usunięcie dolnego zęba mądrości",
        cena: "od 800 zł",
      },
      {
        nazwa: "Usunięcie zęba częściowo zatrzymanego",
        cena: "800 – 1 500 zł",
      },
      {
        nazwa: "Usunięcie zęba całkowicie zatrzymanego",
        cena: "1 000 – 2 000 zł",
      },
      { nazwa: "Nacięcie ropnia", cena: "200 zł" },
      { nazwa: "Szycie chirurgiczne", cena: "100 zł" },
      { nazwa: "Wydłużenie korony zęba", cena: "350 – 400 zł" },
      {
        nazwa: "Plastyka połączenia ustno-zatokowego",
        cena: "600 – 800 zł",
      },
      { nazwa: "Plastyka wędzidełka", cena: "500 zł" },
      {
        nazwa: "Odsłonięcie zatrzymanego zęba z przyklejeniem zamka",
        cena: "od 1 200 zł",
      },
      { nazwa: "Usunięcie kaptura dziąsłowego", cena: "300 zł" },
      { nazwa: "Pobranie wycinka do badania hist-pat", cena: "400 zł" },
      {
        nazwa: "Wycięcie zmiany błony śluzowej jamy ustnej",
        cena: "400 – 600 zł",
      },
      {
        nazwa: "Resekcja wierzchołka korzenia",
        cena: "od 1 200 zł",
      },
      {
        nazwa: "Pourazowe zaopatrzenie zwichniętego zęba",
        cena: "400 zł",
      },
      {
        nazwa: "Pogłębienie przedsionka jamy ustnej",
        cena: "600 zł",
      },
      { nazwa: "Biostymulacja laserem", cena: "100 zł" },
      { nazwa: "Wyłuszczenie torbieli", cena: "wycena indywidualna" },
      {
        nazwa: "Zabiegi z przeszczepem tkanek i augmentacją kości",
        cena: "wycena indywidualna",
      },
      {
        nazwa: "A-PRF / I-PRF (fibryna bogatopłytkowa)",
        cena: "300 – 500 zł",
      },
      {
        nazwa: "Płukanie zębodołu z aplikacją leku",
        cena: "50 zł",
      },
    ],
  },

  {
    id: 4,
    title: "Protetyka",
    content: [
      { nazwa: "Konsultacja protetyczna", cena: "150 zł" },
      {
        nazwa: "Korona pełnoceramiczna / na podbudowie cyrkonowej",
        cena: "1 800 zł",
      },
      { nazwa: "Licówka pełnoceramiczna", cena: "1 800 zł" },
      {
        nazwa: "Korona tymczasowa (laboratoryjna)",
        cena: "300 zł",
      },
      { nazwa: "Proteza szkieletowa", cena: "3 000 zł" },
      { nazwa: "Proteza akrylowa ruchoma", cena: "1 600 zł" },
      { nazwa: "Proteza akrylowa całkowita", cena: "2 200 zł" },
      {
        nazwa: "Proteza na zatrzaskach / zasuwach / teleskopach",
        cena: "wycena indywidualna",
      },
      {
        nazwa: "Wkład koronowo-korzeniowy metalowy",
        cena: "450 – 500 zł",
      },
      {
        nazwa: "Wkład koronowo-korzeniowy pełnoceramiczny",
        cena: "900 zł",
      },
      { nazwa: "Onlay kompozytowy", cena: "800 zł" },
      { nazwa: "Onlay pełnoceramiczny", cena: "1 500 zł" },
    ],
  },

  {
    id: 5,
    title: "Ortodoncja",
    content: [
      { nazwa: "Konsultacja ortodontyczna", cena: "200 zł" },
      {
        nazwa: "Konsultacja ortodontyczna z wyciskami i RTG",
        cena: "400 zł",
      },
      {
        nazwa: "Aparat stały metalowy (1 łuk)",
        cena: "3 500 zł",
      },
      {
        nazwa: "Aparat stały estetyczny (1 łuk)",
        cena: "5 000 zł",
      },
      { nazwa: "Aparat ruchomy", cena: "1 000 – 1 500 zł" },
      {
        nazwa: "Wizyta kontrolna – aparat ruchomy",
        cena: "150 zł",
      },
      {
        nazwa: "Wizyta kontrolna – aparat stały (1 łuk)",
        cena: "200 zł",
      },
      {
        nazwa: "Wizyta kontrolna – aparat stały (2 łuki)",
        cena: "250 zł",
      },
      {
        nazwa: "Wizyta kontrolna – bez wymiany łuków",
        cena: "100 zł",
      },
      {
        nazwa: "Zdjęcie aparatu stałego (2 łuki) + retainery",
        cena: "2 300 zł",
      },
      {
        nazwa: "Zdjęcie aparatu stałego (1 łuk) + retainer",
        cena: "1 150 zł",
      },
    ],
  },

  {
    id: 6,
    title: "Periodontologia",
    content: [
      {
        nazwa: "Skaling, piaskowanie, fluoryzacja",
        cena: "350 zł",
      },
      { nazwa: "Skaling", cena: "250 zł" },
      { nazwa: "Fluoryzacja", cena: "100 zł" },
      {
        nazwa: "Kiretaż zamknięty (połowa łuku)",
        cena: "300 zł",
      },
    ],
  },

  {
    id: 7,
    title: "Radiologia",
    content: [
      { nazwa: "RTG punktowe", cena: "40 zł" },
      { nazwa: "RTG pantomograficzne", cena: "100 zł" },
      {
        nazwa: "Tomografia szczęki i żuchwy",
        cena: "300 zł",
      },
      { nazwa: "Tomografia jednego rejonu", cena: "150 zł" },
    ],
  },
];

interface Props {
  pricing: PricingCategory[];
}

const PricelistClient = ({ pricing }: Props) => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
      return;
    }

    setExpandedId(id);

    setTimeout(() => {
      requestAnimationFrame(() => {
        const el = itemRefs.current[id];
        if (!el) return;

        const yOffset = -100; // header height
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
            {pricing.map((item) => (
              <div
                key={item.slug}
                ref={(el) => {
                  itemRefs.current[item.slug] = el;
                }}
              >
                <AccordionItem
                  title={item.nazwa}
                  content={item.cennikUsluga}
                  isExpended={expandedId === item.slug ? true : false}
                  onToggle={() => toggleExpand(item.slug)}
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

export default PricelistClient;
