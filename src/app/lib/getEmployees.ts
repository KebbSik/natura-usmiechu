import { fetchHygraph } from "./hygraph";
import { EMPLOYEES_QUERY } from "../graphql/queries/employees";
import { EmployeesResponse } from "../types/employee";

export async function getEmployees() {
  const data = await fetchHygraph<EmployeesResponse>({
    query: EMPLOYEES_QUERY,
  });

  return data.employees;
}
