"use server";

import { getPricing } from "../lib/getPricing";
import PricelistClient from "./PricelistClient";

const PriceList = async () => {
  const pricing = await getPricing();

  return <PricelistClient pricing={pricing} />;
};

export default PriceList;
