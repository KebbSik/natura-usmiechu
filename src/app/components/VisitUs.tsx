import Link from "next/link";
import Image from "next/image";

const VisitUs = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        
        h-[30vh]
        min-h-80
        flex
        items-center
        justify-center
      "
      aria-labelledby="cta-heading"
    >
      {/* Background image */}
      <Image
        src="/photos/v.avif"
        alt=""
        fill
        priority
        className="object-cover object-[center_60%]"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-primary/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h2
          id="cta-heading"
          className="text-white text-2xl md:text-3xl font-semibold mb-6"
        >
          Poczuj różnicę już od pierwszej wizyty
        </h2>

        <Link
          href="/kontakt"
          className="
            inline-flex
            items-center
            justify-center
            rounded-lg
            bg-primary
            px-8
            py-4
            text-white
            font-medium
            transition
            hover:bg-primary/90
            focus:outline-none
            focus-visible:ring-2
            focus-visible:ring-white
            focus-visible:ring-offset-2
            focus-visible:ring-offset-primary
          "
        >
          Umów wizytę
        </Link>
      </div>
    </section>
  );
};

export default VisitUs;
