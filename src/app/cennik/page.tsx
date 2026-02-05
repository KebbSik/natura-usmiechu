"use server";

import { getPricing } from "../lib/getPricing";
import PricelistClient from "./PricelistClient";

// Just to show loader
// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const PriceList = async () => {
  // Just to show loader
  // await delay(50000);
  const pricing = await getPricing();
  return <PricelistClient pricing={pricing} />;
};

export default PriceList;
