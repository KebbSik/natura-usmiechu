import servicesProps from "@/app/components/servieces/servicesProps";
import AnimatedSection from "../AnimatedSection";

interface GridElement {
  title: string;
  content: string;
}
interface GridListProps extends servicesProps {
  title: string;
  description: string;
  gridElements: GridElement[];
}

const GridList = ({
  bg,
  reverse,
  title,
  description,
  gridElements,
}: GridListProps) => {
  return (
    <section
      className={`${bg} ${reverse ? "text-center" : ""} rounded-2xl shadow-md`}
    >
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl font-semibold capitalize lg:text-3xl">
          {title}
        </h1>

        <p className="mt-4 ">{description}</p>

        <AnimatedSection direction="bottom" range={40}>
          <div className="grid grid-cols-1 gap-16 mt-8 xl:mt-12 md:grid-cols-2  ">
            {gridElements.map((el, index) => (
              <div
                key={index}
                className="space-y-3 max-w-100 justify-self-center p-4 rounded-2xl border-3 border-primary/50 "
              >
                <span className="inline-block p-3 text-white  bg-primary rounded-full ">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </span>

                <h1 className="text-xl font-semibold  capitalize ">
                  {el.title}
                </h1>

                <p>{el.content}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GridList;
