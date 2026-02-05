export type Employee = {
  imie: string;
  opis: string;
  stanowisko: string;
  zdjecie: {
    url: string;
  };
};

export type EmployeesResponse = {
  employees: Employee[];
};
