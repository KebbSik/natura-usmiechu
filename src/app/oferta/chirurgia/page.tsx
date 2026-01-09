import Title from "@/app/components/Title";
import React from "react";
const data = {
  heading: "Chirurgia",
  paragraph: "Opis chirurgii stomatologicznej",
};
const Chirurgia = () => {
  return (
    <section className="container">
      <div className="flex flex-col items-center m-10 ">
        <Title heading={data.heading} description={data.paragraph}></Title>
      </div>
    </section>
  );
};

export default Chirurgia;
