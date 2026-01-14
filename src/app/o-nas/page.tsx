import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import EmployeeCard from "../components/EmployeeCard";

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
      <Header imageUrl="headers/header.png">O nas</Header>
      <div className="container ">
        <div className="flex flex-col items-center">
          <Title heading={data.heading}></Title>
          {/* Miejsce na pierwsza część sekjji "poznajmy się bliżej" */}
        </div>
      </div>
      <div className="container max-w-370">
        <EmployeeCard employees={employeeList}></EmployeeCard>
      </div>
    </section>
  );
};

export default AboutUs;
