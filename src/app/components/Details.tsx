import Image from "next/image";

const items = [
  {
    text: "W Naturze Uśmiechu wierzymy, że piękny uśmiech zaczyna się od zdrowia i naturalnej harmonii. Za każdym sukcesem leczenia stoi nasz doświadczony, pełen zaangażowania zespół specjalistów, którzy dbają nie tylko o rezultaty, ale przede wszystkim o Twój komfort i dobre samopoczucie.",
    image: "/images/detail_1.png",
    alt: "Nowoczesny gabinet stomatologiczny",
    rotation: 12,
  },
  {
    text: "Tworzymy miejsce, w którym nowoczesna stomatologia spotyka się z indywidualnym podejściem oraz atmosferą spokoju i bezpieczeństwa.",
    image: "/images/detail_2.png",
    alt: "Zespół stomatologów",
    rotation: -12,
  },
  {
    text: "Troszczymy się o Ciebie holistycznie, oferując opiekę, która przywraca zdrowie, pewność siebie i naturalne piękno Twojego uśmiechu.",
    image: "/images/detail_3.png",
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
    <section className="section-padding">
      <div className="container">
        {/* HEADER */}
        <header className="mb-14 text-center">
          <h2>Dlaczego warto nam zaufać</h2>
        </header>

        {/* CONTENT */}
        <div className="flex flex-col gap-8">
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
                <div className="hidden md:flex justify-center">
                  {imageOnLeft && (
                    <Image
                      src={item.image}
                      alt={item.alt}
                      width={320}
                      height={320}
                      className={`
                        object-contain
                        max-w-full
                        ${rotationMap[item.rotation]}
                      `}
                    />
                  )}
                </div>

                {/* ŚRODKOWA KOLUMNA — TEKST (ZAWSZE) */}
                <div className="flex justify-center">
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
    </section>
  );
};

export default Details;
