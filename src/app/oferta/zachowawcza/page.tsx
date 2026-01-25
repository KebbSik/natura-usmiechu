import Header from "@/app/components/Header";
import MediaSection from "@/app/components/servieces/MediaSection";
import Cards from "@/app/components/servieces/Cards";
import GridList from "@/app/components/servieces/GridList";
import GridListImg from "@/app/components/servieces/GridListImg";
import Steps from "@/app/components/servieces/Steps";
import Title from "@/app/components/Title";
import Link from "next/link";
import React from "react";
import MediaText from "@/app/components/servieces/MediaText";

const data = {
  heading: "Zachowawcza",
  paragraph: "Opis zachowawczej",
};

const Zachowawcza = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Stomatoligia Zachowawcza
      </Header>
      <section>
        <div className="flex flex-col  items-center m-10 ">
          <Title heading={data.heading} description={data.paragraph}></Title>
        </div>
        <MediaSection bg="bg-red-100" />
        <MediaText bg="bg-red-200" />
        <Cards bg="bg-red-200" />
        <GridList bg="bg-red-200" />
        <GridListImg bg="bg-red-200" />
        <Steps bg="bg-red-200" />
        <nav aria-label="Główne akcje " className="flex justify-center m-15">
          <Link
            href="/kontakt"
            className=" flex-center btn btn-outline h-12 min-w-60 max-w-100"
          >
            Umów wizytę
          </Link>
        </nav>
      </section>
    </>
  );
};

export default Zachowawcza;
