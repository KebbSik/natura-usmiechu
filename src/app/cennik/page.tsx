"use server";

import { div } from "motion/react-client";
import { getPricing } from "../lib/getPricing";
import PricelistClient from "./PricelistClient";

// Just to show loader
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const PriceList = async () => {
  // Just to show loader
  // await delay(50000);
  const pricing = await getPricing();

  if (!pricing || pricing.length === 0) {
    return (
      <div className="py-12 text-center text-muted">
        Cennik chwilowo niedostępny
      </div>
    );
  }
  return <PricelistClient pricing={pricing} />;
};

export default PriceList;
