import { title } from "process";
import React from "react";
import servicesProps from "@/app/components/servieces/servicesProps";

const data = [
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum              evenietz",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum              evenietz",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum              evenietz",
  },
];

const GridList = ({ bg, reverse }: servicesProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center  capitalize lg:text-3xl">
          explore our <br /> awesome{" "}
          <span className="text-primary text-2xl">Components</span>
        </h1>

        <div className="flex flex-col lg:flex-row gap-8 mt-8 xl:mt-12 xl:gap-16 ">
          {data.map((el, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 space-y-3 text-center bg-white rounded-xl "
            >
              <span className="inline-block p-3 text-white bg-primary rounded-full ">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-xl font-semibold  capitalize ">{el.title}</h1>

              <p>{el.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridList;
