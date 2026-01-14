import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";
import PhoneIcon from "../components/svgs/PhoneIcon";
import EnvelopeIcon from "../components/svgs/EnvelopeIcon";
import PinIcon from "../components/svgs/PinIcon";

const Contact = () => {
  return (
    <div>
      <Header imageUrl="headers/header.png">Kontakt</Header>
      <div className="container ">
        <div className="flex flex-col  items-center px-3">
          <Title heading={"Umów wizytę"}></Title>
          <section className="w-full flex flex-col gap-10 md:flex-row justify-around">
            <div className="flex flex-col items-center   gap-10">
              {/* Dane kontaktowe */}
              <section>
                <address className="flex ">
                  <ul className="flex flex-col gap-7 items-center md:items-start">
                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <PhoneIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <a href="tel:+48123123123">+48 123 123 123</a>
                    </li>

                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <EnvelopeIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <a href="mailto:kontakt@firma.pl">kontakt@firma.pl</a>
                    </li>

                    {/* <li className="contents"> */}
                    <li className="flex gap-3">
                      <PinIcon
                        className="text-primary w-6"
                        width={24}
                        height={24}
                        filled
                      />
                      <span>ul. Przykładowa 12, 00-000 Warszawa</span>
                    </li>
                  </ul>
                </address>
              </section>
              {/* Social media */}
              <nav aria-label="Social media">
                <ul className="flex items-center gap-2">
                  <li className="">
                    <a href="https://www.facebook.com" aria-label="Facebook">
                      <img
                        className="icon-size bg-primary rounded-full p-1 "
                        src="/icons/facebook.svg"
                        alt="facebook"
                      />
                    </a>
                  </li>
                  <li className="bg-primary rounded-full ">
                    <a href="https://www.instagram.com" aria-label="Instagram">
                      <img
                        className="icon-size bg-primary rounded-full p-1 "
                        src="/icons/instagram.svg"
                        alt="instagram"
                      />
                    </a>
                  </li>
                  <li className="bg-primary rounded-full ">
                    <a href="/" aria-label="">
                      <img
                        className="icon-size bg-primary rounded-full p-1 "
                        src="/icons/star.svg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li
                    className="bg-primary rounded-full icon-size
            "
                  >
                    <a href="/" aria-label="">
                      <img className="w-full" src="/icons/b.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Formularz */}
            <div className="flex flex-col gap-5 max-w-500">
              <p className="text-center md:text-start">
                Wypełnij formularz, a my odezwiemy się do Ciebie w krótkim
                czasie
              </p>
              <form className="flex w-full justify-center" method="post ">
                <fieldset className="flex flex-col gap-3  w-full max-w-120">
                  {/* <legend>Formularz kontaktowy</legend> */}

                  <div>
                    <label htmlFor="name" className="sr-only">
                      Imię
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Imię"
                      required
                      className="border border-primary/30 rounded-sm px-2 py-1 w-full focus:outline-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Telefon"
                      required
                      className="border border-primary/30 rounded-sm px-2 py-1 w-full focus:outline-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="E-mail"
                      required
                      className="border border-primary/30 rounded-sm px-2 py-1 w-full focus:outline-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="purpose" className="sr-only">
                      Cel kontaktu
                    </label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      placeholder="Cel kontaktu"
                      rows={4}
                      required
                      className="border border-primary/30 rounded-sm px-2 py-1 w-full focus:outline-primary"
                    />
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      required
                    />
                    <label htmlFor="consent">
                      Wyrażam zgodę na przetwarzanie moich danych osobowych
                    </label>
                  </div>

                  <div>
                    <button type="submit">Wyślij</button>
                  </div>
                </fieldset>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
