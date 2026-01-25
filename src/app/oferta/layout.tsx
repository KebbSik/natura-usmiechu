import React, { ReactNode } from "react";
import Header from "../components/Header";

const OfertaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <Header objectFit="center-50%" imageUrl="/photos/v_14.avif">
        Oferta
      </Header> */}
      {children}
    </>
  );
};

export default OfertaLayout;
