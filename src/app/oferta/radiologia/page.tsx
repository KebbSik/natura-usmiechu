import Header from "@/app/components/Header";
import Title from "@/app/components/Title";
import React from "react";

const data = {
  heading: "Radiologia",
  paragraph: "Opis radiologii",
};

const Radiologia = () => {
  return (
    <>
      <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Radiologia
      </Header>
      <section className="container">
        <div className="flex flex-col items-center m-10 ">
          <Title heading={data.heading} description={data.paragraph}></Title>
        </div>
      </section>
    </>
  );
};

export default Radiologia;
