"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./components/svgs/Logo";
import Burger from "./components/svgs/Burger";
import { ThemeToggle } from "./components/ThemeToggle";

const Categories = [
  {
    name: "Stomatologia zachowawcza",
    link: "/oferta/zachowawcza",
  },
  {
    name: "Implantologia",
    link: "/oferta/implantologia",
  },
  {
    name: "Chirurgia stomatologiczna",
    link: "/oferta/chirurgia",
  },
  {
    name: "Protetyka",
    link: "/oferta/protetyka",
  },
  {
    name: "Ortodoncja",
    link: "/oferta/ortodoncja",
  },
  {
    name: "Periodontologia",
    link: "/oferta/periodontologia",
  },
  {
    name: "Radiologia",
    link: "/oferta/radiologia",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navHeight = 20;

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > navHeight);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  // Navbar resize hook
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // Next.js bug
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed w-full  top-0 transition-colors duration-150 ${
          scrolled ? (open ? "" : "border-b") : ""
        } border-secondary-D  ${
          scrolled
            ? "bg-white text-black"
            : "bg-linear-to-b from-primary/60  to-transparent  text-white "
        } py-5 md:py-0 px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 flex h-${navHeight} justify-between items-center z-50 ${
          open ? "bg-none bg-white text-black" : ""
        }`}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Strona główna"
          className={`${
            scrolled ? " text-primary" : open ? "text-primary" : "text-white"
          }`}
        >
          <div className="w-40  md:w-50 md:h-25  flex items-center">
            <Logo width="100%" height="100" />
          </div>
        </Link>
        <ThemeToggle />
        {/* Desktop menu */}
        <nav className="hidden md:flex  items-center justify-between ">
          <ul className={`hidden md:flex items-center gap-8  text-lg `}>
            <li>
              <Link
                className="   
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0
              after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full
                "
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="   
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0
              after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full"
                href="/o-nas"
              >
                O nas
              </Link>
            </li>

            <li className="relative group">
              {/* Oferta Link */}
              <Link
                href="/oferta"
                className="inline-flex items-center px-4 py-2 hover:bg-white/20  rounded-2xl"
              >
                Oferta
                <svg className="w-4 h-4 mt-1 " viewBox="0 0 20 20">
                  <path d="M10 12l-5-5h10l-5 5z" fill="currentColor" />
                </svg>
              </Link>

              {/* Dropdown */}
              <div
                className="
                  absolute left-0 top-full
                  w-56 bg-white
                  shadow-md
                  opacity-0 invisible
                  group-hover:opacity-100 group-hover:visible
                  transition duration-200
                  z-50
                "
              >
                {Categories.map((el, index) => (
                  <Link
                    key={index}
                    href={el.link}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary/30"
                  >
                    {el.name}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                className="   
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0
              after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full"
                href="/cennik"
              >
                Cennik
              </Link>
            </li>
            <li>
              <Link
                className="   
                relative
                after:absolute after:left-0 after:-bottom-1
                after:h-0.5 after:w-0
              after:bg-white
                after:transition-all after:duration-300
                hover:after:w-full"
                href="/kontakt"
              >
                {/* Umów wizytę */}
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
        {/* Mobile menu */}
        <button
          className=" md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <Burger
            opened={open}
            className={`${
              scrolled ? " text-black" : open ? "text-black" : "text-white"
            } transition-all duration-normal ${open ? "rotate-180" : ""} `}
          ></Burger>
        </button>
      </div>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <ul
        className={`
          md:hidden
          fixed top-0 left-0 right-0
          border-secondary-D 
          ${scrolled ? "border-b " : "border-b"}  ${scrolled ? "bg-white" : ""}
          ${open ? "bg-white" : "bg-white/5 text-black/5"}
          flex flex-col 
          items-center
          transform transition-all duration-500 ease-in-out
          ${
            open
              ? // If navbar height haschanged, need to change this value here manulay
                `translate-y-20 pointer-events-auto`
              : "-translate-y-full pointer-events-none"
          }
          z-40`}
      >
        <li className="w-full h-16 flex-center hover:bg-primary/15 transform transition-all duration-150 ease-in-out  ">
          <Link onClick={() => setOpen(false)} href="/">
            Home
          </Link>
        </li>
        <li className="w-full h-16 flex-center hover:bg-primary/15 transform transition-all duration-100 ease-in-out  ">
          <Link onClick={() => setOpen(false)} href="/o-nas">
            O nas
          </Link>
        </li>
        <li className="w-full h-16 flex-center hover:bg-primary/15 transform transition-all duration-100 ease-in-out ">
          <Link onClick={() => setOpen(false)} href="/oferta">
            Oferta
          </Link>
        </li>
        <li className="w-full h-16 flex-center hover:bg-primary/15 transform transition-all duration-100 ease-in-out ">
          <Link onClick={() => setOpen(false)} href="/cennik">
            Cennik
          </Link>
        </li>
        <li className="w-full h-16 flex-center hover:bg-primary/15 transform transition-all duration-100 ease-in-out ">
          <Link onClick={() => setOpen(false)} href="/kontakt">
            Umów wizytę
          </Link>
        </li>
      </ul>
    </>
  );
}
