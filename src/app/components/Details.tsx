import Image from "next/image";

const items = [
  {
    text: "W Naturze Uśmiechu wierzymy, że piękny uśmiech zaczyna się od zdrowia i naturalnej harmonii. Za każdym sukcesem leczenia stoi nasz doświadczony, pełen zaangażowania zespół specjalistów, którzy dbają nie tylko o rezultaty, ale przede wszystkim o Twój komfort i dobre samopoczucie.",
    image: "/photos/v_14.avif",
    alt: "Nowoczesny gabinet stomatologiczny",
    rotation: 12,
  },
  {
    text: "Tworzymy miejsce, w którym nowoczesna stomatologia spotyka się z indywidualnym podejściem oraz atmosferą spokoju i bezpieczeństwa.",
    image: "/photos/f.avif",
    alt: "Zespół stomatologów",
    rotation: -12,
  },
  {
    text: "Troszczymy się o Ciebie holistycznie, oferując opiekę, która przywraca zdrowie, pewność siebie i naturalne piękno Twojego uśmiechu.",
    image: "/photos/v_23.avif",
    alt: "Zdrowy uśmiech pacjenta",
    rotation: -6,
  },
];

const rotationMap: Record<number, string> = {
  12: "rotate-12",
  "-12": "-rotate-12",
  6: "rotate-6",
  "-6": "-rotate-6",
};

const Details = () => {
  return (
    <section
      className="
      relative
      overflow-hidden
      section-padding 
      py-0
    bg-linear-to-tr
    from-secondary-L
    via-secondary-L
    to-secondary-D
    "
    >
      <div className="relative container z-5">
        {/* HEADER */}
        <header className="my-14 text-center">
          <h2>Dlaczego warto nam zaufać</h2>
        </header>

        {/* CONTENT */}
        <div className="flex flex-col gap-8 ">
          {items.map((item, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={index}
                className="
                  grid grid-cols-1
                  md:grid-cols-3
                  items-center
                  gap-8
                  
                "
              >
                {/* LEWA KOLUMNA — OBRAZ */}
                <div className="hidden md:flex justify-center pb-10">
                  {imageOnLeft && (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={320}
                      height={300}
                      className={`
                        object-contain
                        max-w-full
                        outline-3
                        outline-primary
                        rounded-lg
                       
                        
                        ${rotationMap[item.rotation]}
                      `}
                    />
                  )}
                </div>

                {/* ŚRODKOWA KOLUMNA — TEKST (ZAWSZE) */}
                <div className="flex justify-center mb-5 md:mb-0">
                  <p className="max-w-prose text-center">{item.text}</p>
                </div>

                {/* PRAWA KOLUMNA — OBRAZ */}
                <div className="hidden md:flex justify-center">
                  {!imageOnLeft && (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={320}
                      height={320}
                      className={`
                        object-contain
                        max-w-full
                        outline-3
                        outline-primary
                        rounded-lg
                        
                        ${rotationMap[item.rotation]}
                      `}
                    />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <svg
        viewBox="0 30 400 600"
        fill="none"
        className="absolute
    inset-0
    w-full
    h-full "
      >
        <path
          d="M119.259 3.24597C119.259 3.24597 -1.26216 254.099 8.00869 147.217C17.2795 40.3355 142.054 338.246 61.6599 352.746C-18.7337 367.246 296.716 614.746 261.375 471.746C226.033 328.746 105.063 514.922 153.445 678.036C201.827 841.15 395.567 906.156 526.018 654.107C656.468 402.058 695.5 943.246 695.5 943.246"
          stroke="currentColor"
          strokeWidth="5"
          className="text-primary/20"
        />
      </svg>
    </section>
  );
};

export default Details;
