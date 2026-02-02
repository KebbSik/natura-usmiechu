"use client";
import React from "react";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion, scale } from "motion/react";
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
      {employees.map((employee, index) => {
        const reverse = index % 2 === 1;

        return (
          <article
            key={employee.name}
            className={`py-5 md:px-5 md:rounded-lg flex flex-col odd:bg-secondary-L  md:flex-row  ${reverse ? "md:flex-row-reverse" : ""} items-center justify-start  gap-5 md:gap-5 my-10`}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              viewport={{
                once: true,
                amount: 0.25,
                margin: "0px 0px -20% 0px ",
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative min-w-50 w-full md:min-w-70 max-w-90   rounded-md aspect-3/4 overflow-hidden"
            >
              <Image
                src={employee.photo}
                alt="Profile photo"
                className="object-cover "
                fill
              ></Image>
            </motion.div>
            <AnimatedSection direction={reverse ? "left" : "right"} range={30}>
              <div className="flex flex-col text-center md:text-start gap-2 max-w-130 md:max-w-160">
                <h3>{employee.name}</h3>
                <span className="text-primary font-semibold">
                  {employee.role}
                </span>
                <p>{employee.description}</p>
              </div>
            </AnimatedSection>
          </article>
        );
      })}
    </div>
  );
};

export default EmployeeCard;
