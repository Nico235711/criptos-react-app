import { z } from "zod";
import { CriptoResponseSchema, CurrencySchema, PairSchema } from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CriptoResponseSchema>
export type Pair = z.infer<typeof PairSchema>