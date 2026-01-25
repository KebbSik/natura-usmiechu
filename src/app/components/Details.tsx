import Image from "next/image";

const items = [
  {
    header: "Example Header",
    text: "W Naturze Uśmiechu wierzymy, że piękny uśmiech zaczyna się od zdrowia i naturalnej harmonii. Za każdym sukcesem leczenia stoi nasz doświadczony, pełen zaangażowania zespół specjalistów, którzy dbają nie tylko o rezultaty, ale przede wszystkim o Twój komfort i dobre samopoczucie.",
    image: "/photos/g.avif",
    alt: "Nowoczesny gabinet stomatologiczny",
    rotation: 12,
  },
  {
    header: "Example Header",
    text: "W Naturze Uśmiechu wierzymy, że piękny uśmiech zaczyna się od zdrowia i naturalnej harmonii. Za każdym sukcesem leczenia stoi nasz doświadczony, pełen zaangażowania zespół specjalistów, którzy dbają nie tylko o rezultaty, ale przede wszystkim o Twój komfort i dobre samopoczucie.",
    image: "/photos/v_6.avif",
    alt: "Zespół stomatologów",
    rotation: -12,
  },
  {
    header: "Example Header",
    text: "W Naturze Uśmiechu wierzymy, że piękny uśmiech zaczyna się od zdrowia i naturalnej harmonii. Za każdym sukcesem leczenia stoi nasz doświadczony, pełen zaangażowania zespół specjalistów, którzy dbają nie tylko o rezultaty, ale przede wszystkim o Twój komfort i dobre samopoczucie.",
    image: "/photos/v_12.avif",
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

// const Details = () => {
//   return (
//     <section
//       className="
//       relative
//       overflow-hidden
//       section-padding
//       py-0
//     bg-linear-to-tr
//     from-secondary-L
//     via-secondary-L
//     to-secondary-D
//     "
//     >
//       <div className="relative container z-5">
//         {/* HEADER */}
//         <header className="my-14 text-center">
//           <h2>Dlaczego warto nam zaufać</h2>
//         </header>

//         {/* CONTENT */}
//         <div className="flex flex-col gap-8 ">
//           {items.map((item, index) => {
//             const imageOnLeft = index % 2 === 0;

//             return (
//               <article
//                 key={index}
//                 className="
//                   grid grid-cols-1
//                   md:grid-cols-3
//                   items-center
//                   gap-8

//                 "
//               >
//                 {/* LEWA KOLUMNA — OBRAZ */}
//                 <div className="hidden md:flex justify-center pb-10">
//                   {imageOnLeft && (
//                     <Image
//                       src={item.image}
//                       alt={item.alt}
//                       width={320}
//                       height={300}
//                       className={`
//                         object-contain
//                         max-w-full
//                         outline-3
//                         outline-primary
//                         rounded-lg

//                         ${rotationMap[item.rotation]}
//                       `}
//                     />
//                   )}
//                 </div>

//                 {/* ŚRODKOWA KOLUMNA — TEKST (ZAWSZE) */}
//                 <div className="flex justify-center mb-5 md:mb-0">
//                   <p className="max-w-prose text-center">{item.text}</p>
//                 </div>

//                 {/* PRAWA KOLUMNA — OBRAZ */}
//                 <div className="hidden md:flex justify-center">
//                   {!imageOnLeft && (
//                     <Image
//                       src={item.image}
//                       alt={item.alt}
//                       width={320}
//                       height={320}
//                       className={`
//                         object-contain
//                         max-w-full
//                         outline-3
//                         outline-primary
//                         rounded-lg

//                         ${rotationMap[item.rotation]}
//                       `}
//                     />
//                   )}
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </div>
//       <svg
//         viewBox="0 30 400 600"
//         fill="none"
//         className="absolute
//     inset-0
//     w-full
//     h-full "
//       >
//         <path
//           d="M119.259 3.24597C119.259 3.24597 -1.26216 254.099 8.00869 147.217C17.2795 40.3355 142.054 338.246 61.6599 352.746C-18.7337 367.246 296.716 614.746 261.375 471.746C226.033 328.746 105.063 514.922 153.445 678.036C201.827 841.15 395.567 906.156 526.018 654.107C656.468 402.058 695.5 943.246 695.5 943.246"
//           stroke="currentColor"
//           strokeWidth="5"
//           className="text-primary/20"
//         />
//       </svg>
//     </section>
//   );
// };

const Details = () => {
  return (
    <section
      className="
      relative
      py-0
      
      "
    >
      <div className="relative  z-5 mx-0 w-full">
        {/* CONTENT */}
        <div className="flex flex-col gap-8 pb-10 md:pb-0">
          {items.map((item, index) => {
            const imageOnLeft = index % 2 === 0;

            return (
              <article
                key={index}
                className={`w-full bg-linear-to-l ${imageOnLeft ? "from-primary/30 via-white to-white" : "from-white via-white to-primary/10"}`}
              >
                <div
                  className={`flex flex-col ${imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"}  gap-6 items-center`}
                >
                  {/* OBRAZ */}
                  <div className="relative w-full md:w-2/5 md:h-auto  h-84 md:aspect-square">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* TEKST */}
                  <div className="w-full md:w-3/5 flex p-5 md:p-0 md:justify-center md:items-center ">
                    <div className="flex flex-col max-w-120 gap-5 mx-auto">
                      <h3 className="text-primary">{item.header}</h3>
                      <p className="text-left">{item.text}</p>
                    </div>
                  </div>
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
