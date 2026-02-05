import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Imię musi mieć minimum 3 znaki"),
  phone: z.string().regex(/^[0-9+ ]{7,}$/, "Podaj poprawny numer telefonu"),
  email: z.string().email("Podaj poprawny adres e-mail"),
  purpose: z.string().min(3, "Cel kontaktu musi mieć minimum 3 znaki"),

  consent: z.boolean().refine((val) => val === true, {
    message: "Musisz wyrazić zgodę na przetwarzanie danych",
  }),
  //   consent: z.boolean("true"),

  // anty-spam
  company: z.string().optional(),
  startedAt: z.number().optional(),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
