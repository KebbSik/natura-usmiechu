import React, { ReactNode } from "react";
import Header from "../components/Header";

const OfertaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header imageUrl="headers/header.png">Oferta</Header>
      {children}
    </>
  );
};

export default OfertaLayout;
