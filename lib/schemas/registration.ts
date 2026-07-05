import { z } from "zod";

export const waveSchema = z.object({
  wave: z.enum(["coastal-180", "marathon-42", "duo-orbit"], {
    message: "Please select a wave",
  }),
});

export const detailsSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(8, "Phone number required"),
  emergencyName: z.string().min(1, "Emergency contact required"),
  emergencyPhone: z.string().min(8, "Emergency phone required"),
  teamName: z.string().optional(),
  partnerName: z.string().optional(),
});

export const kitSchema = z.object({
  jerseySize: z.enum(["XS", "S", "M", "L", "XL", "XXL"], {
    message: "Select a jersey size",
  }),
  transportPackage: z.boolean(),
  merchBundle: z.boolean(),
});

export const paymentSchema = z.object({
  paymentMethod: z.enum(["card", "bank"], {
    message: "Select a payment method",
  }),
  agreeTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
});

export type WaveFormData = z.infer<typeof waveSchema>;
export type DetailsFormData = z.infer<typeof detailsSchema>;
export type KitFormData = z.infer<typeof kitSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;
