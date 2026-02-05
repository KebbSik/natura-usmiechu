export const PRICING_QUERY = `
  query Pricing {
    cennikKat(orderBy: kolejnosc_ASC) {
      nazwa
      slug
      cennikUsluga(orderBy: kolejnosc_ASC) {
        nazwa
        cena
      }
    }
  }
`;
