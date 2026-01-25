import React from "react";
import Image from "next/image";
import { reverse } from "dns";
import servicesProps from "@/app/components/servieces/servicesProps";
import { headers } from "next/headers";

interface MediaSectionProps extends servicesProps {
  data: {
    header: string;
    content: string;
  };
}

const MediaText = ({ bg, reverse, data }: MediaSectionProps) => {
  return (
    <>
      <section className={`section-padding ${bg} rounded-2xl shadow-md`}>
        <div className="container">
          <div className="w-full   ">
            <h3 className="rounded-lg">{data.header}</h3>

            <p className="mt-6 rounded-lg">{data.content}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaText;
