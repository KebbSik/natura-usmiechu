import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonail";
import Details from "./components/Details";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Details />
      <Banner />
    </>
  );
}
