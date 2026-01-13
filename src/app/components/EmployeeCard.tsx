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
    <div className="p-10">
      {employees.map((employee) => (
        <article
          key={employee.name}
          className="md:flex justify-between gap-15 my-10"
        >
          <div className="relative w-full md:max-w-70 border-3 border-primary aspect-square overflow-hidden ">
            <Image
              src={employee.photo}
              alt="Profile photo"
              className="object-cover"
              fill
            ></Image>
          </div>
          <div className="flex flex-col gap-2">
            <h3>{employee.name}</h3>
            <span className="text-primary">{employee.role}</span>
            <p>{employee.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default EmployeeCard;
