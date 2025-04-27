import { z } from "zod";

const bikeUpdateValidationSchema =z.object({
    body: z.object({
        Brand: z.string().optional(),
        Model: z.string().optional(),
        Year: z.string().optional(),
    })
}) 