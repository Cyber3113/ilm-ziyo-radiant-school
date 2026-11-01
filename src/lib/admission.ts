import { z } from "zod";

export const GRADES = Array.from({ length: 11 }, (_, i) => String(i + 1));

/** Normalises any typed phone into "+998XXXXXXXXX" digits-only form. */
export function normalizeUzPhone(input: string): string {
  const digits = input.replace(/\D/g, "");
  const local = digits.startsWith("998") ? digits.slice(3) : digits;
  return `+998${local}`;
}

export const admissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Ismni kiriting")
    .max(80, "Ism juda uzun"),
  phone: z
    .string()
    .transform(normalizeUzPhone)
    .refine((v) => /^\+998\d{9}$/.test(v), "Telefon raqam +998 dan keyin 9 ta raqam bo'lishi kerak"),
  grade: z.enum(GRADES as [string, ...string[]], {
    errorMap: () => ({ message: "Sinfni tanlang" }),
  }),
});

export type AdmissionInput = z.input<typeof admissionSchema>;
