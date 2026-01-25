import React from "react";
import servicesProps from "@/app/components/servieces/servicesProps";

const data = [
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
  },
];
const GridList = ({ bg, reverse }: servicesProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
          explore our <br /> awesome{" "}
          <span className=" text-2xl text-primary">Components</span>
        </h1>

        <p className="mt-4 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam
          voluptatibus
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3 ">
          {data.map((el, index) => (
            <div key={index} className="space-y-3 ">
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
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
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
