import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonail";
import Details from "./components/Details";
import Banner from "./components/Banner";
import Connector from "./svg/connector.svg";
export default function Home() {
  return (
    <>
      <Hero />

      <Testimonials />
      <Image
        src="/svg/connector.svg"
        alt=""
        width={400}
        height={40}
        className="w-full opacity-40"
      />
      <Details />
      <Banner />
    </>
  );
}
