import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="   bg-footer py-12">
      <div className="container">
        <div className=" flex flex-col md:flex-row  md:flex-wrap gap-y-10">
          <section className=" flex flex-col items-center md:w-1/2">
            {/*  Logo  */}
            <Link
              href="/"
              aria-label="Strona główna"
              className="flex  relative w-50 h-20"
            >
              <Image src="/logo/Logo_2.svg" alt="logo" fill></Image>
            </Link>

            {/*  Social media  */}
            <nav aria-label="Social media">
              <ul className="flex justify-center items-center gap-2">
                <li className="">
                  <a href="https://www.facebook.com" aria-label="Facebook">
                    <img
                      className="icon-size bg-social rounded-full p-1 "
                      src="/icons/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                </li>
                <li className="bg-social rounded-full ">
                  <a href="https://www.instagram.com" aria-label="Instagram">
                    <img
                      className="icon-size bg-social rounded-full p-1 "
                      src="/icons/instagram.svg"
                      alt="instagram"
                    />
                  </a>
                </li>
                <li className="bg-social rounded-full ">
                  <a href="/" aria-label="">
                    <img
                      className="icon-size bg-social rounded-full p-1 "
                      src="/icons/star.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li
                  className="bg-social rounded-full icon-size
            "
                >
                  <a href="/" aria-label="">
                    <img className="w-full" src="/icons/b.svg" alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Dane kontaktowe */}
          <section className="md:w-1/2">
            <address className="flex justify-center">
              <ul className="grid  grid-cols-[auto_1fr] gap-x-2 gap-y-2">
                <li className="contents">
                  <img className="icon-size" src="/icons/phone.svg" alt="" />
                  <a href="tel:+48123123123">+48 123 123 123</a>
                </li>

                <li className="contents">
                  <img className="icon-size" src="/icons/envelope.svg" alt="" />
                  <a href="mailto:kontakt@firma.pl">kontakt@firma.pl</a>
                </li>

                <li className="contents">
                  <img className="icon-size" src="/icons/location.svg" alt="" />
                  <span>
                    ul. Przykładowa 12,
                    <br />
                    00-000 Warszawa
                  </span>
                </li>
              </ul>
            </address>
          </section>

          {/* Copyrights */}
          <section className="w-full">
            <p className="text-wrap text-center text-xs text-gray-500">
              © Copyright 2025 naturausmiechu.pl Created by Kevin Sarfo
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
