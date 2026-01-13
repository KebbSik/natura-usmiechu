import React from "react";
import Header from "../components/Header";
import Title from "../components/Title";

const Contact = () => {
  return (
    <div>
      <Header imageUrl="headers/header.png">Kontakt</Header>
      <Title heading={"Umów wizytę"}></Title>
      <section className="flex flex-col md:flex-row">
        <div className="flex flex-col gap-5">
          {/* Dane kontaktowe */}
          <section className="">
            <address className="flex">
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
        <div className="flex flex-col">
          <p>
            Wypełnij formularz, a my odezwiemy się do Ciebie w krótkim czasie
          </p>
          <form method="post">
            <fieldset>
              <legend>Formularz kontaktowy</legend>

              <div>
                <label htmlFor="name">Imię</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div>
                <label htmlFor="phone">Telefon</label>
                <input type="tel" id="phone" name="phone" required />
              </div>

              <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div>
                <label htmlFor="purpose">Cel kontaktu</label>
                <textarea id="purpose" name="purpose" rows={4} required />
              </div>

              <div>
                <input type="checkbox" id="consent" name="consent" required />
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
  );
};

export default Contact;
