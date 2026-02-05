import { ReactNode } from "react";
import Cta from "../components/Cta";

const OfertaLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Cta />
    </>
  );
};

export default OfertaLayout;
