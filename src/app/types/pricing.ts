export type PricingItem = {
  nazwa: string;
  cena: string;
};

export type PricingCategory = {
  nazwa: string;
  slug: string;
  cennikUsluga: PricingItem[];
};

export type PricingResponse = {
  cennikKat: PricingCategory[];
};
