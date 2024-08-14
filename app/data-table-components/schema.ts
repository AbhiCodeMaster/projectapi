
// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
import { z } from "zod";

export const salesDataSchema = z.object({
  productName: z.string(),
  category: z.string(),
  quantitySold: z.number(),
  salesAmount: z.number(),
  dateOfSale: z.string()
});

export type SalesData = z.infer<typeof salesDataSchema>;
