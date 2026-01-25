import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: string;
  children?: React.ReactNode;
  objectFit: string;
}

const Header = ({ imageUrl, children, objectFit }: Props) => {
  return (
    <header className="w-full h-60 md:h-100  relative">
      <div>
        <Image
          className={`opacity-100 object-cover object-[${[objectFit]}]`}
          // className={`opacity-100 object-cover object-[center_25%]`}
          src={imageUrl}
          alt="header"
          fill
        />
        <div className="absolute w-full h-full bg-primary/20 flex-center ">
          <h1 className="text-white  text-center pt-20">{children}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
