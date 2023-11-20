import { z } from "zod";

const signUpSchema = z.object({
  firstName: z.string().trim().min(2, "Etunimi on pakollinen"),
  lastName: z.string().trim().min(2, "Sukunimi on pakollinen"),
  email: z.string().email("Sähköpostiosoite on virheellinen."),
  phoneNumber: z.string().trim().min(5, "Puhelinnumero pakollinen"),
  content: z
    .string()
    .trim()
    .min(10, "Viestin tulee olla vähintään 10 merkkiä pitkä."),
  // terms: z.literal(true, {
  //   errorMap: () => ({
  //     message: "Sinun tulee hyväksyä tietosuojaseloste sekä käyttöehdot.",
  //   }),
  // }),
});

export { signUpSchema };
