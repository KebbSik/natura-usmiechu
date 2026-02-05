import servicesProps from "@/app/components/servieces/servicesProps";
import AnimatedSection from "../AnimatedSection";

interface GridElement {
  title: string;
  content: string;
}
interface GridListImgProps extends servicesProps {
  title: string;
  imageUrl: string;
  gridElements: GridElement[];
}

const GridList = ({
  bg,
  reverse,
  title,
  imageUrl,
  gridElements,
}: GridListImgProps) => {
  return (
    <AnimatedSection direction="bottom" range={40}>
      <section className={`${bg} rounded-2xl shadow-md`}>
        <div className="container px-6 py-10 mx-auto">
          <h1
            className={`text-2xl font-semibold lg:text-3xl ${reverse ? "text-right" : ""} `}
          >
            {title}
          </h1>

          <div className={`mt-2 ${reverse ? "text-right" : ""}`}>
            <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center">
            {reverse && (
              <div className="hidden lg:flex lg:w-1/2 lg:justify-center shadow-md">
                <img
                  className="w-[28rem] h-[28rem] flex-shrink-0  object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                  src={imageUrl}
                  alt="img"
                />
              </div>
            )}
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {gridElements.map((el, index) => (
                <div
                  key={index}
                  className={`space-y-3 ${reverse ? "text-right" : 0}`}
                >
                  <span className="inline-block p-3 bg-primary text-white rounded-xl ">
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
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </span>

                  <h1 className="text-xl font-semibold ">{el.title}</h1>

                  <p>{el.content}</p>
                </div>
              ))}
            </div>

            {!reverse && (
              <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
                <img
                  className="w-[28rem] h-[28rem] flex-shrink-0  shadow-md object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                  src={imageUrl}
                  alt="img"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
};

export default GridList;
