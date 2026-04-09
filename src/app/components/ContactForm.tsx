"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormValues } from "@/app/lib/contact.schema";

const ContactForm = () => {
  const [sent, setSent] = useState(false);
  const startTime = Date.now();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormValues) => {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        startedAt: startTime,
      }),
    });

    setSent(true);
  };

  // Success
  if (sent) {
    return (
      <div className="flex h-104 w-full flex-col items-center justify-center gap-4 text-center">
        <div className="rounded-sm border max-w-100 border-green-500/40 bg-green-50 px-4 py-3 text-green-700">
          Dziękujemy za przesłanie wiadomości. Skontaktujemy się z Tobą wkrótce.
        </div>

        <button
          className="btn flex justify-center py-2 w-40 self-center"
          onClick={() => {
            reset();
            setSent(false);
          }}
        >
          Wyślij ponownie
        </button>
      </div>
    );
  }

  // Form
  return (
    <div className="flex w-full justify-center">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-none flex-col gap-2"
      >
        {/* honeypot */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
        <div className="mb-1 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-11 w-11 shrink-0 text-primary"
              aria-hidden
            >
              <path
                d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M14 2V8H20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path
                d="M8 12H16M8 16H16M8 20H12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <h2 className="text-lg font-semibold text-primary">
              Napisz do nas
            </h2>
          </div>
          <p className="text-sm leading-relaxed text-primary/90">
            Wypełnij formularz kontaktowy, a my odezwiemy się wkrótce.
          </p>
        </div>
        <div className="min-h-13.5">
          <input
            placeholder="Imię"
            {...register("name")}
            className={`w-full border bg-white px-2 py-1 rounded-sm ${
              errors.name ? "border-red-400" : "border-primary/30"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs">{errors.name.message}</p>
          )}
        </div>
        <div className="min-h-13.5">
          <input
            placeholder="Telefon"
            {...register("phone")}
            className={`w-full border bg-white px-2 py-1 rounded-sm ${
              errors.phone ? "border-red-400" : "border-primary/30"
            }`}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs">{errors.phone.message}</p>
          )}
        </div>

        <div className="min-h-13.5">
          <input
            type="email"
            placeholder="E-mail"
            {...register("email")}
            className={`w-full border bg-white px-2 py-1 rounded-sm ${
              errors.email ? "border-red-400" : "border-primary/30"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs">{errors.email.message}</p>
          )}
        </div>
        <div className="min-h-33">
          <textarea
            rows={4}
            placeholder="Cel kontaktu"
            {...register("purpose")}
            className={`w-full border bg-white px-2 py-1 rounded-sm ${
              errors.purpose ? "border-red-400" : "border-primary/30"
            }`}
          />
          {errors.purpose && (
            <p className="text-red-400 text-xs">{errors.purpose.message}</p>
          )}
        </div>
        <div className="min-h-11">
          <label className="flex gap-2 items-center text-sm">
            <input type="checkbox" {...register("consent")} />
            Wyrażam zgodę na przetwarzanie danych osobowych
          </label>
          {errors.consent && (
            <p className="text-red-400 text-sm">{errors.consent.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn flex justify-center py-2 w-40 self-center"
          disabled={isSubmitting}
        >
          Wyślij
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
