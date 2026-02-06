import Header from "../components/Header";
import Title from "../components/Title";
import EmployeesSection from "../components/EmployeesSection";
import Image from "next/image";
import Sinus from "../components/svgs/Sinus";
import Cta from "../components/Cta";
import AnimatedSection from "../components/AnimatedSection";
import { getEmployees } from "../lib/getEmployees";
import { div } from "motion/react-client";

const data = {
  heading: "Poznajmy się bliżej",
};

const AboutUs = async () => {
  // const employees = await getEmployees();

  // return (
  //   <>
  //     <script
  //       type="application/ld+json"
  //       dangerouslySetInnerHTML={{
  //         __html: JSON.stringify({
  //           "@context": "https://schema.org",
  //           "@type": "BreadcrumbList",
  //           itemListElement: [
  //             {
  //               "@type": "ListItem",
  //               position: 1,
  //               name: "Strona główna",
  //               item: "https://naturausmiechu.pl",
  //             },
  //             {
  //               "@type": "ListItem",
  //               position: 2,
  //               name: "O nas",
  //               item: "https://naturausmiechu.pl/o-nas",
  //             },
  //           ],
  //         }),
  //       }}
  //     />
  //     <section>
  //       <Header imageUrl="/photos/11.avif" objectFit="center_25%">
  //         O nas
  //       </Header>
  //       <div className="container ">
  //         <div className="flex flex-col items-center">
  //           <Title heading={data.heading}></Title>
  //         </div>
  //       </div>
  //       <div className="container max-w-370">
  //         <AnimatedSection direction="right" range={30}>
  //           <article className="flex flex-col md:flex-row justify-between gap-5 px-10 my-5 md:my-0">
  //             <div className=" relative md:w-5/9  max-w-200 aspect-3/2 rounded-lg md:border-3  border-primary overflow-hidden">
  //               <Image src={"/photos/10.avif"} alt={""} fill />
  //             </div>
  //             <p className=" flex w-full border border-primary/10  bg-secondary-L md:bg-transparent md:border-0 p-5 rounded-md md:w-4/9  items-center md:p-0 md:pb-5">
  //               W Naturze Uśmiechu tworzymy zespół specjalistów, których łączy
  //               wspólny cel — troska o zdrowy, naturalnie piękny uśmiech każdego
  //               pacjenta. Stawiamy na indywidualne podejście, empatię i
  //               nowoczesne metody leczenia, aby każda wizyta przebiegała w
  //               spokojnej, komfortowej atmosferze.
  //             </p>
  //           </article>
  //         </AnimatedSection>
  //         <AnimatedSection direction="left" range={30}>
  //           <article className="flex flex-col md:flex-row-reverse justify-between gap-5 px-10 py-10 md:py-0 md:-translate-y-5 bg-secondary-L md:bg-transparent">
  //             <div className=" relative w-full md:w-5/9 max-w-200 aspect-3/2 md:border-3 rounded-lg  border-primary overflow-hidden ">
  //               <Image src={"/photos/g.avif"} alt={""} fill />
  //             </div>
  //             <p className=" flex w-full  bg-white border border-primary/10 md:bg-transparent md:border-0 p-5 rounded-md md:w-4/9   items-center md:p-0 md:pt-5">
  //               W Naturze Uśmiechu tworzymy zespół specjalistów, których łączy
  //               wspólny cel — troska o zdrowy, naturalnie piękny uśmiech każdego
  //               pacjenta. Stawiamy na indywidualne podejście, empatię i
  //               nowoczesne metody leczenia, aby każda wizyta przebiegała w
  //               spokojnej, komfortowej atmosferze.
  //             </p>
  //           </article>
  //         </AnimatedSection>
  //       </div>
  //       <div className="container max-w-370 relative overflow-hidden">
  //         <Sinus />

  //         <EmployeesSection employees={employees}></EmployeesSection>
  //       </div>
  //       <Cta />
  //     </section>
  //   </>
  // );
  return <div>O nas</div>;
};

export default AboutUs;
