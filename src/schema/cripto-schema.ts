import { z } from 'zod';

export const CurrencySchema = z.object({
  code: z.string(),
  name: z.string()
})

// colocando z.array soluciona el problema
export const CriptoResponseSchema = z.array(
  z.object({
    CoinInfo: z.object({
      FullName: z.string(),
      Name: z.string()
    })
  })
)

export const CriptoPriceSchema = z.object({
  PRICE: z.string(),
  LOWDAY: z.string(),
  LASTUPDATE: z.string(),
  IMAGEURL: z.string(),
  HIGHDAY: z.string(),
  CHANGEPCT24HOUR: z.string()
})

export const PairSchema = z.object({
  currency: z.string(),
  cryptoCurrency: z.string()
})