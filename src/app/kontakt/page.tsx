import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Kontakt",
};
import Title from "../components/Title";
import PhoneIcon from "../components/svgs/PhoneIcon";
import EnvelopeIcon from "../components/svgs/EnvelopeIcon";
import PinIcon from "../components/svgs/PinIcon";
import ContactForm from "../components/ContactForm";
import { getContactInfo } from "../lib/getContactInfo";
import ZnanyIcon from "../components/svgs/ZnanyIcon";

const ZNANY_LEKARZ_PLACOWKA =
  "https://www.znanylekarz.pl/placowki/natura-usmiechu-gabinet-stomatologiczny";

const contactPanelClass =
  "rounded-2xl border border-primary/25 bg-primary/5 p-6";

const Contact = async () => {
  const contactInfo = await getContactInfo();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Strona główna",
                item: "https://naturausmiechu.pl",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Kontakt",
                item: "https://naturausmiechu.pl/kontakt",
              },
            ],
          }),
        }}
      />
      <div>
        <Header objectFit="center" imageUrl="/photos/v_19.avif">
          Kontakt
        </Header>

        <div className="container ">
          <div className="flex flex-col  items-center px-3">
            <Title heading={"Umów wizytę"}></Title>
            <section className="flex w-full flex-col gap-10">
              {/* Wiersz 1: dane kontaktowe + social media */}
              <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-20">
                <section>
                  <address className="flex not-italic">
                    <ul className="flex flex-col gap-7 items-center md:items-start">
                      <li className="flex gap-3 items-center">
                        <PhoneIcon
                          className="text-primary w-6"
                          width={24}
                          height={24}
                          filled
                        />
                        <div className=" flex flex-col">
                          {contactInfo.telefon.map((el, index) => (
                            <a key={index} href={`tel:${el}`}>
                              {el}
                            </a>
                          ))}
                        </div>
                      </li>

                      <li className="flex gap-3 items-center">
                        <EnvelopeIcon
                          className="text-primary w-6"
                          width={24}
                          height={24}
                          filled
                        />
                        <div className=" flex flex-col">
                          {contactInfo.email.map((el, index) => (
                            <a key={index} href={`mailto:${el}`}>
                              {el}
                            </a>
                          ))}
                        </div>
                      </li>
                      <li className="flex gap-3">
                        <PinIcon
                          className="text-primary w-6"
                          width={24}
                          height={24}
                          filled
                        />
                        <span>
                          {contactInfo.ulica} {contactInfo.miejscowoscIKod}
                        </span>
                      </li>
                    </ul>
                  </address>
                </section>
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

              {/* Wiersz 2: ZnanyLekarz + lub + formularz */}
              <div className="flex w-full flex-col items-stretch gap-6 md:flex-row md:items-stretch md:justify-center md:gap-6 lg:gap-10">
                <aside
                  className={`flex w-full flex-col gap-4 md:max-w-xs md:shrink-0 ${contactPanelClass}`}
                >
                  <div className="flex items-center gap-3">
                    {/* <svg
                      viewBox="-5 -5 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-14 w-14 shrink-0 text-primary"
                      aria-hidden
                    >
                      <path
                        d="M12.7734 4.5C12.7734 3.67031 13.4437 3 14.2734 3H15.7734C16.6031 3 17.2734 3.67031 17.2734 4.5V11.1047L22.9922 7.80469C23.7094 7.39219 24.6281 7.63594 25.0406 8.35312L25.7906 9.65156C26.2031 10.3687 25.9594 11.2875 25.2422 11.7L19.5234 15L25.2422 18.3C25.9594 18.7125 26.2078 19.6312 25.7906 20.3484L25.0406 21.6469C24.6281 22.3641 23.7094 22.6125 22.9922 22.1953L17.2734 18.8953V25.5C17.2734 26.3297 16.6031 27 15.7734 27H14.2734C13.4437 27 12.7734 26.3297 12.7734 25.5V18.8953L7.05468 22.1953C6.33749 22.6078 5.41874 22.3641 5.00624 21.6469L4.25624 20.3484C3.84374 19.6312 4.08749 18.7125 4.80468 18.3L10.5234 15L4.80468 11.7C4.08749 11.2875 3.84374 10.3687 4.25624 9.65156L5.00624 8.35312C5.41874 7.63594 6.33749 7.39219 7.05468 7.80469L12.7734 11.1047V4.5Z"
                        fill="currentColor"
                      />
                    </svg> */}

                    <ZnanyIcon
                      className="h-10 w-10 shrink-0 text-primary"
                      width={40}
                      height={40}
                      filled
                    />
                    <h2 className="text-lg font-semibold text-primary">
                      Umów wizytę online
                    </h2>
                  </div>
                  <p className="text-sm leading-relaxed text-primary/90">
                    Wybierz dogodny termin w serwisie{" "}
                    <strong className="font-bold">ZnanyLekarz</strong>.
                  </p>
                  <a
                    href={ZNANY_LEKARZ_PLACOWKA}
                    className="btn w-full justify-center text-center font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Zarezerwuj na ZnanyLekarz
                  </a>
                </aside>

                <div className="flex shrink-0 items-center justify-center self-center py-1 md:px-2 md:py-0">
                  <div className="flex w-full items-center gap-3 md:w-auto">
                    <span className="h-px flex-1 bg-primary/25 md:hidden" />
                    <span className="rounded-full border border-primary/25 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
                      lub
                    </span>
                    <span className="h-px flex-1 bg-primary/25 md:hidden" />
                  </div>
                </div>

                <div className={`min-w-0 flex-1 ${contactPanelClass}`}>
                  <ContactForm />
                </div>
              </div>
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
    </>
  );
};

export default Contact;
