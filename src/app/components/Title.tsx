import Svg from "./svgs/PhoneIcon";

type TitleProps = {
  heading: string;
  description?: string;
};

export default function Title({ heading, description }: TitleProps) {
  return (
    <header className="flex flex-col items-center space-y-4 min-w-50 md:min-w-80 mt-5 mb-5">
      <h3 className="text-xl mb-1.5 md:mb-2.5 md:text-2xl xl:text-3xl text-center font-semibold">
        {heading}
      </h3>

      <hr className="w-full border-t-3 border-primary/30" />
      <p className="w-3/4 text-base text-center text-gray-600 text-wrap">
        {description}
      </p>
    </header>
  );
}
