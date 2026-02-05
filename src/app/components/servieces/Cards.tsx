import servicesProps from "@/app/components/servieces/servicesProps";
import AnimatedSection from "../AnimatedSection";

interface CardElement {
  title: string;
  content: string;
}
interface CardsProps extends servicesProps {
  title: string;
  cardElements: CardElement[];
}

const Card = ({ bg, title, cardElements }: CardsProps) => {
  return (
    <section className={`${bg} shadow-md`}>
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center   lg:text-3xl">
          {title}
        </h1>

        <div className="flex flex-col lg:flex-row  gap-8 mt-8 xl:mt-12 xl:gap-16 ">
          {cardElements.map((el, index) => (
            <div
              key={index}
              className="flex flex-col flex-1 items-center shadow-md px-6 py-12 space-y-3 text-center bg-white rounded-xl "
            >
              <AnimatedSection direction="top" range={40} delay={index * 0.3}>
                <span className="inline-block p-3 text-white bg-primary rounded-full ">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold   ">{el.title}</h1>

                <p>{el.content}</p>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
