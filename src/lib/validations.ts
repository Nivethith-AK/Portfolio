import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name." })
    .max(80, { message: "That name is a little too long." }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email." })
    .email({ message: "Please enter a valid email address." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Tell me a bit more — at least 10 characters." })
    .max(2000, { message: "Please keep it under 2000 characters." }),
  /**
   * Honeypot field: hidden from real users, but bots tend to fill it in.
   * Allowed through Zod so the API can return a fake success; never max(0)
   * here or bots never reach that branch.
   */
  company: z.string().optional().default(""),
});

export type ContactInput = z.infer<typeof contactSchema>;
