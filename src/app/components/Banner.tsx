import Image from "next/image";
import Link from "next/link";
import Mark from "./svgs/Mark";
import AnimatedSection from "./AnimatedSection";

const Banner = () => {
  return (
    <section
      className="
    relative
    section-padding
    bg-[url('/photos/v_26.avif')]
    bg-no-repeat
    bg-[center_60%]
    bg-cover
   md:bg-linear-to-t
   overflow-hidden


  "
    >
      {/* OVERLAY – mobile */}
      <div className="absolute inset-0 bg-primary/40 md:hidden" />
      <div className="container relative z-10">
        <div className="grid items-center justify-center gap-12 md:grid-cols-2">
          {/* left side – content */}
          <AnimatedSection direction="bottom" range={40}>
            <article className="flex flex-col gap-6 text-white md:text-inherit">
              <header className="text-center md:text-start text-white md:text-primary">
                <h2>Masz pytania?</h2>
                <h2>Skontaktuj się z nami!</h2>
              </header>

              <nav aria-label="Główne akcje " className="flex">
                <Link
                  href="/kontakt"
                  className=" flex-center btn btn-outline h-12 min-w-60 max-w-100 hover:bg-primary/85 hover:text-white"
                >
                  Umów wizytę
                </Link>
              </nav>
            </article>
          </AnimatedSection>
          <AnimatedSection direction="bottom" range={40}>
            {/* right site – img (desktop only) */}
            <figure className="relative hidden md:block h-100 ">
              <Image
                src="/photos/v_26.avif"
                alt="Gabinet Natura Uśmiechu"
                fill
                className="object-cover rounded-lg object-[center_80%]"
                priority
              />
            </figure>
          </AnimatedSection>
        </div>
      </div>
      <div className="hidden md:block">
        <Mark />
      </div>
    </section>
  );
};

export default Banner;
