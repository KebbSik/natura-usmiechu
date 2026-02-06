import { fetchHygraph } from "./hygraph";
import { PRICING_QUERY } from "../graphql/queries/pricing";
import { PricingResponse } from "../types/pricing";

export async function getPricing() {
  const data = await fetchHygraph<PricingResponse>({
    query: PRICING_QUERY,
  });

  return data?.cennikKat ?? [];
}
