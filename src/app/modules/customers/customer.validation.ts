import { z } from "zod";

const updateCustomerZodSchema = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
    }),
})

export const CustomerValidation = {
    updateCustomerZodSchema,
}