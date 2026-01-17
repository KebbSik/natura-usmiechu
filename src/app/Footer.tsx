import Link from "next/link";
import Image from "next/image";
import React from "react";
import EnvelopeIcon from "./components/svgs/EnvelopeIcon";
import PinIcon from "./components/svgs/PinIcon";
import PhoneIcon from "./components/svgs/PhoneIcon";
import Logo from "./components/svgs/Logo";

const Footer = () => {
  return (
    <footer className="   bg-footer py-5">
      <div className="container">
        <div className=" flex flex-col md:flex-row  md:flex-wrap gap-y-10">
          <section className=" flex flex-col items-center md:w-1/2">
            {/*  Logo  */}
            <Logo width={170} height={100} />

            {/*  Social media  */}
            <nav aria-label="Social media">
              <ul className="flex justify-center items-center gap-2">
                <li className="">
                  <a
                    href="https://www.facebook.com/naturausmiechu/?locale=pl_PL"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon-size bg-social rounded-full p-1 "
                      src="/icons/facebook.svg"
                      alt="facebook"
                    />
                  </a>
                </li>

                <li className="bg-social rounded-full ">
                  <a
                    href="https://www.znanylekarz.pl/placowki/natura-usmiechu-gabinet-stomatologiczny"
                    aria-label="znany lekarz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
              <ul className="grid  grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-center">
                <li className="contents">
                  <PhoneIcon className="text-black" width={24} height={24} />{" "}
                  <a href="tel:+48123123123">+48 123 123 123</a>
                </li>

                <li className="contents">
                  <EnvelopeIcon className="text-black" width={24} height={24} />

                  <a href="mailto:kontakt@firma.pl">kontakt@firma.pl</a>
                </li>

                <li className="contents">
                  <PinIcon className="text-black" width={24} height={24} />
                  <span>
                    ul. Przykładowa 12,
                    <br />
                    00-000 Warszawa
                  </span>
                </li>
              </ul>
            </address>
          </section>
        </div>
        {/* Copyrights */}
        <section className="w-full mt-5">
          <p className="text-wrap text-center text-xs text-gray-500">
            © Copyright 2025 naturausmiechu.pl Created by Kevin Sarfo
          </p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
