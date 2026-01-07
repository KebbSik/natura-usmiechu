import Image from "next/image";
import Link from "next/link";

const tittle =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis.";

const Hero = () => {
  return (
    <section className="py-4 container">
      <article className="flex flex-col md:flex-row-reverse ">
        <div className="flex-center-x flex-col gap-6 md:w-1/2">
          <header>
            <h1 className="text-center">Natura Uśmiechu</h1>
          </header>
          <p className="text-center">{tittle}</p>

          <nav className="flex justify-center gap-5" aria-label="Główne akcje">
            <Link className="btn" href="/kontakt">
              Sprawź usługi
            </Link>
            <Link className="btn btn-outline" href="/oferta">
              Umów wizytę
            </Link>
          </nav>
        </div>
        <figure className="flex justify-center items-center md:w-1/2">
          <Image
            src="/images/Hero_img.png"
            alt="hero_img"
            width={600}
            height={400}
            priority
          />
        </figure>
      </article>
    </section>
  );
};

export default Hero;
