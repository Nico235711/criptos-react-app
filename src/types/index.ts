import { z } from "zod";
import {
  CriptoPriceSchema,
  CriptoResponseSchema,
  CurrencySchema,
  PairSchema
} from "../schema/cripto-schema";

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CriptoResponseSchema>
export type CryptoPrice = z.infer<typeof CriptoPriceSchema>
export type Pair = z.infer<typeof PairSchema>