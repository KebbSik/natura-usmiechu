import React from "react";
import Image from "next/image";
import { reverse } from "dns";
import servicesProps from "@/app/components/servieces/servicesProps";

const MediaText = ({ bg, reverse }: servicesProps) => {
  return (
    <>
      <section className={`section-padding ${bg} `}>
        <div className="w-full max-w-2xl  ">
          <h3 className="rounded-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>

          <p className="mt-6 rounded-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
            voluptate fugiat placeat numquam rem aliquid vero nemo, consectetur
            beatae ea praesentium porro! Reprehenderit alias, accusamus non
            corporis nisi doloremque. Aperiam corrupti tempora dicta nihil
            voluptates accusantium nam iure corporis optio, nulla iusto vel
            sapiente mollitia distinctio porro natus. Quo soluta nemo qui illum
            odio quia. Earum velit qui quae culpa veniam nihil porro officiis,
            ipsa repellendus sint animi accusamus! Consequatur placeat delectus,
            dolorum culpa fugit dignissimos ipsam possimus voluptatibus
            cupiditate!
          </p>
        </div>
      </section>
    </>
  );
};

export default MediaText;
