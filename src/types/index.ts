import { z } from "zod";
import { CriptoResponseSchema, CurrencySchema } from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CriptoResponseSchema>