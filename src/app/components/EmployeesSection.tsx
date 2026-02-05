"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { motion } from "motion/react";
import { Employee } from "../types/employee";

interface EmployeesSectionProps {
  employees: Employee[];
}

const EmployeesSection = ({ employees }: EmployeesSectionProps) => {
  return (
    <div className="md:p-10">
      {employees.map((employee, index) => {
        const reverse = index % 2 === 1;

        return (
          <article
            key={employee.imie}
            className={`py-5 md:px-5 md:rounded-lg flex flex-col odd:bg-secondary-L md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center justify-start gap-5 md:gap-5 my-10`}
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
              className="relative min-w-50 w-full md:min-w-70 max-w-90 rounded-md aspect-3/4 overflow-hidden"
            >
              <Image
                src={employee.zdjecie.url}
                alt={employee.imie}
                className="object-cover"
                fill
                sizes="(max-width: 360px) 100vw"
              />
            </motion.div>

            <AnimatedSection direction={reverse ? "left" : "right"} range={30}>
              <div className="flex flex-col text-center md:text-start gap-2 max-w-130 md:max-w-160">
                <h3>{employee.imie}</h3>
                <span className="text-primary font-semibold">
                  {employee.stanowisko}
                </span>
                <p>{employee.opis}</p>
              </div>
            </AnimatedSection>
          </article>
        );
      })}
    </div>
  );
};

export default EmployeesSection;
