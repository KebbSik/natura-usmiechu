"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Image from "next/image";
import { it } from "node:test";

interface Props {
  title: string;
  content: string;
  isExpended: boolean;
  onToggle: () => void;
}
const data = [
  { id: 1, title: "Acc1", content: "asdfasdfasdfas" },
  { id: 2, title: "Acc2", content: "asdfasdfasdfas" },
  { id: 3, title: "Acc3", content: "asdfasdfasdfas" },
  { id: 4, title: "Acc4", content: "asdfasdfasdfas" },
  { id: 5, title: "Acc5", content: "asdfasdfasdfas" },
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
        className={`bg-white rounded-full overflow-hidden transition-all duration-300 ${
          isExpanded ? "max-h-96" : "max-h-20"
        }`}
      >
        <div
          className="flex justify-between items-center p-3 cursor-pointer bg-primary"
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
        className={`border mx-3 overflow-hidden transition-all duration-300 ${
          isExpanded ? "h-100 " : "h-0 "
        }`}
      >
        {content}
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
