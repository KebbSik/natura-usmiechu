import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "./AnimatedSection";

const tittle =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.";

const Hero = () => {
  return (
    <section>
      <div className=" h-screen w-full relative mb-15">
        <Image
          src="/photos/10.avif"
          alt="hero_img"
          fill
          className="object-cover"
          priority
        />

        <AnimatedSection range={40} direction="left">
          <div className="  flex justify-center md:justify-start md:pb:30px  pt-40 md:pt-60 text-white relative w-full h-screen flex-center ">
            <div className=" md:ml-35 flex gap-3 md:gap-5 flex-col">
              <h1 className="text-center md:text-left">
                Zadbaj o swój uśmiech
              </h1>
              <p className="max-w-160 px-10 sm:px-20 md:px-0 font-semibold">
                Kompleksowe leczenie, precyzja i komfort w jednym miejscu.
                Zadbamy o zdrowie i estetykę Twojego uśmiechu.
              </p>
              <div className="flex justify-center md:justify-start gap-3 md:gap-5">
                <Link href={"/kontakt"}>
                  <button className="btn">Umów wizytę</button>
                </Link>
                <Link href={"/oferta"}>
                  <button className="btn btn-outline">Sprawdz ofertę</button>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <div className=" h-[50vh] md:h-[65vh] w-full relative">
        <Image
          // src="/images/Hero_img.png"
          // src="/photos/v_19.avif"
          src="/photos/v_18.avif"
          alt="hero_img"
          fill
          className="object-cover object-top"
          priority
        />
        {/* <div className="bg-primary/30 text-white relative w-full h-full flex-center "> */}
        <div className=" text-white relative w-full h-full flex-center ">
          <h2 className="text-center md:text-left ">
            <AnimatedSection direction="top" range={40}>
              „Naturalne piękno zaczyna się od zdrowia”
            </AnimatedSection>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
