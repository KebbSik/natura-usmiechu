import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import EmployeeCard from "../components/EmployeeCard";

const data = {
  heading: "O nas",
};

const employeeList = [
  {
    name: "Joanna Kowalczyk",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/female.png",
  },
  {
    name: "Jan Kowalczyk",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/male.png",
  },
  {
    name: "Jan Kowalczyk1",
    role: "Lekarz dentysta",
    description:
      "Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu.s",
    photo: "/employees/male.png",
  },
];
const AboutUs = () => {
  return (
    <section>
      <Header imageUrl="headers/header.png">O nas</Header>
      <div className="container">
        <Title heading={data.heading}></Title>
        {/* Miejsce na pierwsza część sekjji "poznajmy się bliżej" */}
      </div>
      <EmployeeCard employees={employeeList}></EmployeeCard>
    </section>
  );
};

export default AboutUs;
