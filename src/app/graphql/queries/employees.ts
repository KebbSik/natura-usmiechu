export const EMPLOYEES_QUERY = `
  query Employees {
    employees {
      imie
      opis
      stanowisko
      zdjecie {
        url
      }
    }
  }
`;
