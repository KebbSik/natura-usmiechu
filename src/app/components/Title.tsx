type TitleProps = {
  heading: string;
  description?: string;
};

export default function Title({ heading, description }: TitleProps) {
  return (
    <header className="flex flex-col items-center space-y-4 min-w-80">
      <h3 className="text-3xl text-center font-semibold">{heading}</h3>

      <hr className="w-full border-t-3 border-primary" />
      <p className="w-3/4 text-base text-center text-gray-600 text-wrap">
        {description}
      </p>
    </header>
  );
}
