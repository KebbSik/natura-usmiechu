import type { Metadata } from "next";
import Hero from "./components/Hero";

export const metadata: Metadata = {
  title: { absolute: "Natura Uśmiechu" },
};
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
