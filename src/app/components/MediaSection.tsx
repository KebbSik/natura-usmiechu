import React from "react";
import Image from "next/image";
import { reverse } from "dns";

interface Props {
  bg?: string;
  reverse?: boolean;
}

const MediaSection = ({ bg, reverse }: Props) => {
  return (
    // <div>
    //   Tutaj zbudje sekcje odpwoeidzialan za wysweitlanie tresci i obrazka:
    //   inspiracja : https://ladentina.pl/protetyka/ należy pamietać o mobile
    //   first{" "}
    // </div>

    <>
      {/* Dodac background w props */}
      <section className={`section-padding ${bg} `}>
        <div
          className={`flex flex-col gap-10 md:${
            reverse ? "flex-row-reverse" : "flex-row"
          }`}
        >
          <div className="flex flex-col md:w-2/3 gap-5">
            <h3>Stomatologia zachowawcza</h3>
            <span className="text-primary font-semibold">
              Lorem ipsum dolor sit amet.
            </span>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quis sed ipsam earum suscipit iusto deserunt quaerat ipsa labore
              libero perferendis sunt, vero iste itaque reiciendis, nulla
              necessitatibus temporibus hic pariatur beatae repellendus odit?
              Optio deserunt neque magnam ullam laudantium, sit libero sint
              sapiente dolorum obcaecati voluptatum, et molestiae quaerat?
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              quasi.
            </p>
          </div>
          <div className="relative md:w-1/3  min-h-50">
            <Image src="/images/detail_2.png" alt="zdjecie_pogladowe" fill />
          </div>
        </div>
      </section>
    </>
  );
};

export default MediaSection;
