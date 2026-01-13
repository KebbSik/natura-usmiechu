import Header from "@/app/components/Header";
import MediaSection from "@/app/components/MediaSection";
import Title from "@/app/components/Title";
import Link from "next/link";
import React from "react";

const data = {
  heading: "Zachowawcza",
  paragraph: "Opis zachowawczej",
};

const Zachowawcza = () => {
  return (
    <section>
      <div className="flex flex-col  items-center m-10 ">
        <Title heading={data.heading} description={data.paragraph}></Title>
      </div>
      <MediaSection bg={"bg-secondary-L"} />
      <MediaSection reverse />
      <nav aria-label="Główne akcje " className="flex justify-center m-15">
        <Link
          href="/kontakt"
          className=" flex-center btn btn-outline h-12 min-w-60 max-w-100"
        >
          Umów wizytę
        </Link>
      </nav>
    </section>
  );
};

export default Zachowawcza;
