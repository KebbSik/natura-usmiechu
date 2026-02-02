import React from "react";
import Image from "next/image";
import { reverse } from "dns";
import servicesProps from "@/app/components/servieces/servicesProps";
import AnimatedSection from "../AnimatedSection";

interface MediaSectionProps extends servicesProps {
  data: {
    header: string;
    content: string;
    imgUrl: string;
  };
}
const MediaSection = ({ bg, reverse, data }: MediaSectionProps) => {
  return (
    <>
      <section
        className={` text-gray-600 body-font ${bg} rounded-2xl shadow-md`}
      >
        <div
          className={`container mx-auto flex px-5 py-12 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}   flex-col items-center`}
        >
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <AnimatedSection direction={reverse ? "right" : "left"} range={40}>
              <img
                className="object-cover object-center aspect-square rounded shadow-md"
                alt="hero"
                src={data.imgUrl}
              />
            </AnimatedSection>
          </div>
          <div className="lg:grow md:w-1/2 lg:px-12 md:px-8 flex flex-col md:items-start md:text-left items-center text-center">
            <AnimatedSection direction={reverse ? "left" : "right"} range={40}>
              <h3 className="title-font mb-4 font-medium text-gray-900">
                {data.header}
              </h3>
              <p className="mb-8 leading-relaxed">{data.content}</p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaSection;
