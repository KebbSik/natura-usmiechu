"use client";

import { useRef, useState } from "react";
import Cta from "../components/Cta";
import Header from "../components/Header";
import Title from "../components/Title";
import AccordionItem from "./AccordionItem";
import { PricingCategory } from "../types/pricing";

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
      <Header objectFit="center" imageUrl="/photos/v_12.avif">
        Cennik
      </Header>
      <div className="container mb-10">
        <div className="flex flex-col items-center px-3 ">
          <Title heading={"Zapoznaj się z naszym cennikiem"}></Title>
          <div className="flex flex-col gap-1  mx-auto py-10">
            {pricing.map((item, index) => {
              // console.log(item);
              const id = item.slug ?? `pricing-${index}`;

              return (
                <div
                  key={id}
                  ref={(el) => {
                    itemRefs.current[id] = el;
                  }}
                >
                  <AccordionItem
                    title={item.nazwa}
                    content={item.cennikUsluga}
                    isExpended={expandedId === id ? true : false}
                    onToggle={() => toggleExpand(id)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Cta />
    </section>
  );
};

export default PricelistClient;
