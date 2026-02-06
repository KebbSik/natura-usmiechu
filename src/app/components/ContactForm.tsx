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
      <div className="flex flex-col items-center justify-center h-104 gap-4  text-center">
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
    <div className="flex justify-center">
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col  gap-2 md:min-w-100 max-w-130"
      >
        {/* honeypot */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register("company")}
        />
        <div className="min-h-13.5">
          <input
            placeholder="Imię"
            {...register("name")}
            className={`w-full border px-2 py-1 rounded-sm ${
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
            className={`w-full border px-2 py-1 rounded-sm ${
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
            className={`w-full border px-2 py-1 rounded-sm ${
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
            className={`w-full border px-2 py-1 rounded-sm ${
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
