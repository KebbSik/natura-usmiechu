"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 border bg-white px-6 flex h-16 justify-between items-center z-50 ">
        {/* Logo */}
        <Link href="/" aria-label="Strona główna">
          <Image
            src="/logo/Logo_2.svg"
            alt="logo"
            width={120}
            height={40}
          ></Image>
        </Link>
        {/* Desktop menu */}
        <nav className="hidden md:flex  items-center justify-between">
          <ul className="hidden md:flex items-center gap-8">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/o-nas">O nas</Link>
            </li>
            <li>
              <Link href="/oferta">Oferta</Link>
            </li>
            <li>
              <Link href="/cennik">Cennik</Link>
            </li>
            <li>
              <Link href="/kontakt">Umów wizytę</Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu */}
        <button
          className=" md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Image
            src={open ? "/icons/close-x.svg" : "/icons/hamburger.svg"}
            alt="hamburger"
            width={25}
            height={25}
          ></Image>
        </button>
      </div>

      <ul
        className={`
          md:hidden
          fixed top-16 left-0 right-0
        bg-white
          flex flex-col 
          items-center
          transform transition-transform duration-300 ease-in-out
          ${
            open
              ? "translate-y-0 pointer-events-auto"
              : "-translate-y-full pointer-events-none"
          }
          z-40`}
      >
        <li className="w-full h-15 flex-center  ">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
        </li>
        <li className="w-full h-15 flex-center ">
          <Link onClick={() => setOpen(false)} href="/o-nas">
            O nas
          </Link>
        </li>
        <li className="w-full h-15 flex-center ">
          <Link onClick={() => setOpen(false)} href="/oferta">
            Oferta
          </Link>
        </li>
        <li className="w-full h-15 flex-center ">
          <Link onClick={() => setOpen(false)} href="/cennik">
            Cennik
          </Link>
        </li>
        <li className="w-full h-15 flex-center ">
          <Link onClick={() => setOpen(false)} href="/kontakt">
            Umów wizytę
          </Link>
        </li>
      </ul>
    </>
  );
}
