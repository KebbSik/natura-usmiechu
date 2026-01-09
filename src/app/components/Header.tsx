import Image from "next/image";
import React from "react";

interface Props {
  imageUrl: string;
  children?: React.ReactNode;
}

const Header = ({ imageUrl, children }: Props) => {
  return (
    <header className="w-full h-40 md:h-50  relative">
      <div>
        <Image
          className=" opacity-40"
          src="/headings/header.png"
          alt="header"
          fill
        />
        <div className="absolute w-full h-full bg-primary/40 flex-center">
          <h1 className="text-white">{children}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
