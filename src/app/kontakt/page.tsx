import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import PhoneIcon from "../components/svgs/PhoneIcon";
import EnvelopeIcon from "../components/svgs/EnvelopeIcon";
import PinIcon from "../components/svgs/PinIcon";
import contactData from "../contactData";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div>
      {/* <Header imageUrl="headers/header.png">Kontakt</Header> */}
      <Header objectFit="center_20%" imageUrl="/photos/v_19.avif">
        Kontakt
      </Header>

      <div className="container ">
        <div className="flex flex-col  items-center px-3">
          <Title heading={"Umów wizytę"}></Title>
          <section className="w-full flex flex-col gap-10 md:flex-row justify-around">
            <div className="flex flex-col justify-around items-center   gap-10">
              {/* Dane kontaktowe */}
              <section>
                <address className="flex not-italic">
                  <ul className="flex flex-col gap-7 items-center md:items-start">
                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <PhoneIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <a href="tel:+48123123123">{contactData.phone}</a>
                    </li>

                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <EnvelopeIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <a href={`mailto:${contactData.email}`}>
                        {contactData.email}
                      </a>
                    </li>

                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <PinIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <span>
                        {contactData.address.line1} {contactData.address.line2}
                      </span>
                    </li>
                  </ul>
                </address>
              </section>
              {/* Social media */}
              <nav aria-label="Social media">
                <ul className="flex items-center gap-2">
                  <li className="">
                    <a
                      href="https://www.facebook.com/naturausmiechu/?locale=pl_PL"
                      aria-label="Facebook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon-size bg-primary hover:bg-primary/80 transition-all duration-200 rounded-lg p-1 "
                        src="/icons/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                  </li>

                  <li className=" rounded-lg ">
                    <a
                      href="https://www.znanylekarz.pl/placowki/natura-usmiechu-gabinet-stomatologiczny"
                      aria-label="znanly lekarz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="icon-size bg-primary hover:bg-primary/80 transition-all duration-200 rounded-lg p-1 "
                        src="/icons/star.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li className="bg-primary hover:bg-primary/80 transition-all duration-200   rounded-lg icon-size flex justify-center items-center">
                    <a
                      href="https://www.instagram.com/natura_usmiechu/"
                      aria-label="instagram"
                    >
                      <img
                        className="w-6.5 "
                        src="/icons/instagram.svg"
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Formularz */}
            <ContactForm />
          </section>
          {/* Mapa */}
          <div className="w-full h-100 md:h-120 m-10 rounded-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2321.5584891330136!2d18.47731117702021!3d54.417772494020085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fd9ffd40e77afb%3A0xc85f7b41ce5443a!2sNatura%20U%C5%9Bmiechu%20Gabinet%20stomatologiczny!5e0!3m2!1spl!2spl!4v1768391351537!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
