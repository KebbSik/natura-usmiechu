import Image from "next/image";
import Link from "next/link";

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
    md:bg-none
  "
    >
      {/* OVERLAY – tylko mobile */}
      <div className="absolute inset-0 bg-primary/40 md:hidden" />

      <div className="container relative z-10">
        <div className="grid items-center justify-center gap-12 md:grid-cols-2">
          {/* LEWA STRONA – TREŚĆ */}
          <article className="flex flex-col gap-6 text-white md:text-inherit">
            <header className="text-center md:text-start text-white md:text-primary">
              <h2>Masz pytania?</h2>
              <h2>Skontaktuj się z nami!</h2>
            </header>

            <nav aria-label="Główne akcje " className="flex">
              <Link
                href="/kontakt"
                className=" flex-center btn btn-outline h-12 min-w-60 max-w-100"
              >
                Umów wizytę
              </Link>
            </nav>
          </article>

          {/* PRAWA STRONA – OBRAZ (desktop only) */}
          <figure className="relative hidden md:block h-100 ">
            <Image
              // src="/images/banner.png"
              src="/photos/v_26.avif"
              alt="Gabinet Natura Uśmiechu"
              fill
              className="object-cover rounded-lg object-[center_80%]"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Banner;
