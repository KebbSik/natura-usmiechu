import Image from "next/image";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonail";
import Details from "./components/Details";
import Banner from "./components/Banner";
import Connector from "./components/svgs/Connector";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Natura Uśmiechu",
            url: "https://naturausmiechu.pl",
          }),
        }}
      />
      <Hero />
      <Testimonials />
      <Connector className="w-full absolute -translate-y-1/2 z-8 text-primary" />
      <Details />
      <Connector className="w-full absolute -translate-y-1/2 z-8 text-primary" />
      <Banner />
    </>
  );
}
