"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  phone: string;
  email: string;
  purpose: string;
  consent: boolean;
};

const ContactForm = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const onSubmit = (data: FormValues) => {
    console.log("Formularz poprawny", data);
    reset();
    setShowSuccess(true);
  };

  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setShowSuccess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  return (
    <div className="flex flex-col gap-5 max-w-500">
      <p className="text-center md:text-start">
        Wypełnij formularz, a my odezwiemy się do Ciebie w krótkim czasie
      </p>

      {showSuccess && (
        <div
          role="status"
          aria-live="polite"
          className="rounded-sm border border-green-500/40 bg-green-50 px-3 py-2 text-sm text-green-700"
        >
          ✅ Formularz został wysłany poprawnie. Skontaktujemy się z Tobą
          wkrótce.
        </div>
      )}

      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full justify-center"
      >
        <fieldset className="flex flex-col gap-3 w-full max-w-120">
          {/* Imię */}
          <div>
            <label htmlFor="name" className="sr-only">
              Imię
            </label>
            <input
              id="name"
              placeholder="Imię"
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name", {
                required: "Imię jest wymagane",
                minLength: {
                  value: 3,
                  message: "Imię musi mieć minimum 3 znaki.",
                },
              })}
              className={`border rounded-sm px-2 py-1 w-full focus:outline-primary
                ${errors.name ? "border-red-400" : "border-primary/30"}`}
            />
            {errors.name && (
              <p id="name-error" role="alert" className="text-red-400 text-xs">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Telefon */}
          <div>
            <label htmlFor="phone" className="sr-only">
              Telefon
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Telefon"
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone", {
                required: "Telefon jest wymagany",
                pattern: {
                  value: /^[0-9+ ]{7,}$/,
                  message: "Podaj poprawny numer telefonu.",
                },
              })}
              className={`border rounded-sm px-2 py-1 w-full focus:outline-primary
                ${errors.phone ? "border-red-400" : "border-primary/30"}`}
            />
            {errors.phone && (
              <p id="phone-error" role="alert" className="text-red-400 text-xs">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="sr-only">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-mail"
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email", {
                required: "E-mail jest wymagany",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Podaj poprawny adres e-mail.",
                },
              })}
              className={`border rounded-sm px-2 py-1 w-full focus:outline-primary
                ${errors.email ? "border-red-400" : "border-primary/30"}`}
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-red-400 text-xs">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Cel kontaktu */}
          <div>
            <label htmlFor="purpose" className="sr-only">
              Cel kontaktu
            </label>
            <textarea
              id="purpose"
              rows={4}
              placeholder="Cel kontaktu"
              aria-invalid={!!errors.purpose}
              aria-describedby={errors.purpose ? "purpose-error" : undefined}
              {...register("purpose", {
                required: "Cel kontaktu jest wymagany",
                minLength: {
                  value: 3,
                  message: "Cel kontaktu musi mieć minimum 3 znaki.",
                },
              })}
              className={`border rounded-sm px-2 py-1 w-full focus:outline-primary
                ${errors.purpose ? "border-red-400" : "border-primary/30"}`}
            />
            {errors.purpose && (
              <p
                id="purpose-error"
                role="alert"
                className="text-red-400 text-xs"
              >
                {errors.purpose.message}
              </p>
            )}
          </div>

          {/* Zgoda */}
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <input
                type="checkbox"
                id="consent"
                aria-invalid={!!errors.consent}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                {...register("consent", {
                  required: "Musisz wyrazić zgodę na przetwarzanie danych.",
                })}
                className={`accent-primary cursor-pointer
                  ${errors.consent ? "ring-1 ring-red-400" : ""}`}
              />
              <label
                htmlFor="consent"
                className="select-none text-sm cursor-pointer"
              >
                Wyrażam zgodę na przetwarzanie moich danych osobowych
              </label>
            </div>

            {errors.consent && (
              <p
                id="consent-error"
                role="alert"
                className="text-red-400 text-sm"
              >
                {errors.consent.message}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button className="btn py-2" type="submit">
              Wyślij
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ContactForm;
