import React from "react";
import Image from "next/image";

interface Props {
  reverse?: boolean;
}

interface Employee {
  name: string;
  role: string;
  description: string;
  photo: string;
}

type EmployeesList = {
  employees: Employee[];
};

const EmployeeCard = ({ employees }: EmployeesList) => {
  return (
    <div className="md:p-10">
      {employees.map((employee) => (
        <article
          key={employee.name}
          className="py-5 md:px-5 md:rounded-lg flex flex-col odd:bg-secondary-L  md:flex-row md:even:flex-row-reverse items-center justify-start  gap-5 md:gap-5 my-10"
        >
          <div className="relative min-w-50 w-full md:min-w-70 max-w-90   rounded-md aspect-3/4 overflow-hidden">
            <Image
              src={employee.photo}
              alt="Profile photo"
              className="object-cover "
              fill
            ></Image>
          </div>
          <div className="flex flex-col text-center md:text-start gap-2 max-w-130 md:max-w-160">
            <h3>{employee.name}</h3>
            <span className="text-primary font-semibold">{employee.role}</span>
            <p>{employee.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EmployeeCard;
