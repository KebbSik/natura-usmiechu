import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import EmployeeCard from "../components/EmployeeCard";
import Image from "next/image";
import VisitUs from "../components/VisitUs";
import Sinus from "../components/svgs/Sinus";

const data = {
  heading: "Poznajmy się bliżej",
};

const employeeList = [
  {
    name: "Joanna Kowalczyk8",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/8.avif",
  },
  {
    name: "Jan Kowalczyk7",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/7.avif",
  },
  {
    name: "Jan Kowalczyk6",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/6.avif",
  },
  {
    name: "Jan Kowalczyk5",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/5.avif",
  },
  {
    name: "Jan Kowalczyk4",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/4.avif",
  },
  {
    name: "Jan Kowalczyk3",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/3.avif",
  },
  {
    name: "Jan Kowalczyk2",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/2.avif",
  },
  {
    name: "Jan Kowalczyk1",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/1.avif",
  },
];
const AboutUs = () => {
  return (
    <section>
      <Header imageUrl="/photos/11.avif" objectFit="center_20%">
        O nas
      </Header>
      <div className="container ">
        <div className="flex flex-col items-center">
          <Title heading={data.heading}></Title>
        </div>
      </div>
      <div className="container max-w-370">
        <article className="flex flex-col md:flex-row justify-between gap-5 px-10 my-5 md:my-0">
          <div className=" relative md:w-5/9  max-w-200 aspect-3/2 rounded-lg md:border-3  border-primary overflow-hidden">
            <Image src={"/photos/10.avif"} alt={""} fill />
          </div>
          <p className=" flex w-full border border-primary/10  bg-secondary-L md:bg-transparent md:border-0 p-5 rounded-md md:w-4/9  items-center md:p-0 md:pb-5">
            W Naturze Uśmiechu tworzymy zespół specjalistów, których łączy
            wspólny cel — troska o zdrowy, naturalnie piękny uśmiech każdego
            pacjenta. Stawiamy na indywidualne podejście, empatię i nowoczesne
            metody leczenia, aby każda wizyta przebiegała w spokojnej,
            komfortowej atmosferze.
          </p>
        </article>
        <article className="flex flex-col md:flex-row-reverse justify-between gap-5 px-10 py-10 md:py-0 md:-translate-y-5 bg-secondary-L md:bg-transparent">
          <div className=" relative w-full md:w-5/9 max-w-200 aspect-3/2 md:border-3 rounded-lg  border-primary overflow-hidden ">
            <Image src={"/photos/g.avif"} alt={""} fill />
          </div>
          <p className=" flex w-full  bg-white border border-primary/10 md:bg-transparent md:border-0 p-5 rounded-md md:w-4/9   items-center md:p-0 md:pt-5">
            W Naturze Uśmiechu tworzymy zespół specjalistów, których łączy
            wspólny cel — troska o zdrowy, naturalnie piękny uśmiech każdego
            pacjenta. Stawiamy na indywidualne podejście, empatię i nowoczesne
            metody leczenia, aby każda wizyta przebiegała w spokojnej,
            komfortowej atmosferze.
          </p>
        </article>
      </div>
      <div className="container max-w-370 relative">
        <Sinus />

        <EmployeeCard employees={employeeList}></EmployeeCard>
      </div>
      <VisitUs />
    </section>
  );
};

export default AboutUs;
