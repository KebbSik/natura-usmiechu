import React, { ReactNode } from "react";
import Header from "../components/Header";
import Cta from "../components/servieces/Cta";

const OfertaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Oferta
      </Header> */}
      {children}
      <Cta />
    </>
  );
};

export default OfertaLayout;
