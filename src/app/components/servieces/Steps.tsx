import { title } from "process";
import React from "react";
import servicesProps from "@/app/components/servieces/servicesProps";
import { promises } from "dns";
import AnimatedSection from "../AnimatedSection";

interface StepElement {
  title: string;
  content: string;
}
interface StepProps extends servicesProps {
  stepElements: StepElement[];
  finishElement: StepElement;
  imageUrl: string;
}

const Steps = ({
  bg,
  reverse,
  stepElements,
  finishElement,
  imageUrl,
}: StepProps) => {
  return (
    <section className={`text-gray-600 body-font ${bg}`}>
      <AnimatedSection direction="bottom" range={40}>
        <div className="container px-5 py-12 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              {stepElements.map((el, index) => (
                <div key={index} className="flex relative pb-12">
                  <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                    <div className="h-full w-1 bg-primary/50 pointer-events-none"></div>
                  </div>
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                      <path d="M22 4L12 14.01l-3-3"></path>
                    </svg>
                  </div>
                  <div className="grow pl-4">
                    <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                      {el.title}
                    </h2>
                    <p className="leading-relaxed">{el.content}</p>
                  </div>
                </div>
              ))}
              <div className="flex relative pb-12">
                <div className="shrink-0 w-10 h-10 rounded-full bg-primary inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                </div>
                <div className="grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                    {finishElement.title}
                  </h2>
                  <p className="leading-relaxed">{finishElement.content}</p>
                </div>
              </div>
            </div>

            <img
              className="lg:w-3/5 md:w-1/2 2xl:max-h-150 object-cover shadow-md object-center rounded-lg md:mt-0 mt-12 square"
              src={imageUrl}
              alt="step"
            />
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default Steps;
