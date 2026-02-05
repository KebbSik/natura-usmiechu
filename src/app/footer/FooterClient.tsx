"use client";

import EnvelopeIcon from "../components/svgs/EnvelopeIcon";
import PinIcon from "../components/svgs/PinIcon";
import PhoneIcon from "../components/svgs/PhoneIcon";
import Logo from "../components/svgs/Logo";
import { useCookieConsent } from "../context/CookieConsentContext";
import { getContactInfo } from "../lib/getContactInfo";
import { ContactInfo } from "../types/contact";

interface Props {
  contactInfo: ContactInfo;
}

const contactData = {
  phone: "+48 509 838 095",
  email: "info@naturausmiechu.pl",
  address: {
    line1: "Międzygwiezdna 2/5",
    line2: " 80-299 Gdańsk",
  },
};

function toTelHref(phone: string): string {
  const cleaned = phone.replace(/[^\d+]/g, "");

  if (!cleaned.startsWith("+") && cleaned.length === 9) {
    return `tel:+48${cleaned}`;
  }

  return `tel:${cleaned}`;
}

const FooterClient = ({ contactInfo }: Props) => {
  const { resetConsent } = useCookieConsent();
  return (
    <footer className="   bg-footer pt-8 pb-2">
      <div className="container">
        <div className=" flex flex-col md:flex-row  md:flex-wrap gap-y-10 py-2">
          <section className=" flex flex-col items-center md:w-1/2">
            {/*  Logo  */}
            <div className="w-40  md:w-50 md:h-25  py-5 flex items-center">
              <Logo width="100%" height="100" />
            </div>
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
                      className="icon-size bg-social  rounded-lg p-1 hover:bg-social/90 "
                      src="/icons/facebook.svg"
                      alt="Facebook"
                    />
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.znanylekarz.pl/placowki/natura-usmiechu-gabinet-stomatologiczny"
                    aria-label="znany lekarz"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="icon-size bg-social hover:bg-social/90 rounded-lg p-1 "
                      src="/icons/star.svg"
                      alt="Znany lekarz"
                    />
                  </a>
                </li>
                <li className="bg-social hover:bg-social/90 rounded-lg icon-size flex justify-center items-center">
                  <a
                    href="https://www.instagram.com/natura_usmiechu/"
                    aria-label="instagram"
                  >
                    <img
                      className="w-6.5"
                      src="/icons/instagram.svg"
                      alt="Instagram"
                    />
                  </a>
                </li>
              </ul>
            </nav>
          </section>

          {/* Dane kontaktowe */}
          <section className="md:w-1/2 mt-auto">
            <address className="flex justify-center not-italic">
              <ul className="grid  grid-cols-[auto_1fr] gap-x-2 gap-y-2 items-center">
                <li className="contents">
                  <PhoneIcon className="text-black" width={24} height={24} />{" "}
                  <div className="flex flex-col">
                    {contactInfo.telefon.map((tel, index) => (
                      <a key={index} href={toTelHref(tel)}>
                        {tel}
                      </a>
                    ))}
                  </div>
                </li>

                <li className="contents">
                  <EnvelopeIcon className="text-black" width={24} height={24} />

                  <div className="flex flex-col">
                    {contactInfo.email.map((mail, index) => (
                      <a key={index} href={`mailto:${mail}`}>
                        {mail}
                      </a>
                    ))}
                  </div>
                </li>

                <li className="contents">
                  <PinIcon className="text-black" width={24} height={24} />
                  <span>
                    {contactInfo.ulica}
                    <br />
                    {contactInfo.miejscowoscIKod}
                  </span>
                </li>
              </ul>
            </address>
          </section>
        </div>
        {/* Copyrights */}
        <section className="w-full mt-5 flex flex-col items-center gap-2">
          <p className="text-wrap text-center text-xs text-gray-500">
            © Copyright 2025 naturausmiechu.pl Created by Kevin Sarfo
          </p>

          <button
            onClick={resetConsent}
            className="text-xs text-gray-400 underline hover:text-gray-700 cursor-pointer"
          >
            Zmień ustawienia cookies
          </button>
        </section>
      </div>
    </footer>
  );
};

export default FooterClient;
