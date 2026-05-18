import { z } from "zod";

export const searchSchema = z.object({
  destination: z.string().min(2, "Enter destination"),
  dates: z.string().min(2, "Enter dates"),
  guests: z.number().min(1).max(12),
});

export type SearchFormValues = z.infer<typeof searchSchema>;
