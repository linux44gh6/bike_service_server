import { z } from "zod";

const serviceUpdateSchema = z.object({
    body: z.object({
        completionDate: z.string().optional(),
        status: z.enum(['pending', 'completed',"IN-PROGRESS"]).optional(),
        description: z.string().optional(),
    })
})

export const ServiceValidation = {
    serviceUpdateSchema,
}