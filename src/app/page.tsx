import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonail";
import Details from "./components/Details";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Image
        src="/svg/connector.svg"
        alt=""
        width={400}
        height={40}
        className="w-full absolute -translate-y-1/2 "
      />
      <Testimonials />
      <Image
        src="/svg/connector.svg"
        alt=""
        width={400}
        height={40}
        className="w-full absolute -translate-y-1/2 "
      />
      <Details />
      <Image
        src="/svg/connector.svg"
        alt=""
        width={400}
        height={40}
        className="hidden md:block md:w-full md:absolute md:-translate-y-1/2 "
      />
      <Banner />
    </>
  );
}
