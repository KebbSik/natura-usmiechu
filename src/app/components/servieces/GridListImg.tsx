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
  {
    title: "Copy & paste components",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum              evenietz",
  },
];

const imageUrl =
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

const GridList = ({ bg, reverse }: servicesProps) => {
  return (
    <section className={`${bg}`}>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold  capitalize lg:text-3xl ">
          explore our <br /> awesome Components
        </h1>

        <div className="mt-2">
          <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
        </div>

        <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
          <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
            {data.map((el, index) => (
              <div className="space-y-3">
                <span className="inline-block p-3 bg-primary text-white rounded-xl ">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold  capitalize ">
                  {el.title}
                </h1>

                <p>{el.content}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
            <img
              className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
              src={imageUrl}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridList;
