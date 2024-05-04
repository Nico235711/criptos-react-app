import axios from "axios";
import { CriptoPriceSchema, CriptoResponseSchema } from "../schema/cripto-schema";
import { Pair } from "../types";

export async function getCriptos() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
  const { data: { Data } }  = await axios(url)
  // @result se fija si Data corresponde al schema
  // @result retorna false porque si bien es un objeto tambien es un arreglo
  const result = CriptoResponseSchema.safeParse(Data)
  if (result.success) return result.data
}

export async function getData(pair: Pair) {

  const { cryptoCurrency, currency } = pair

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrency}&tsyms=${currency}`
  const { data: { DISPLAY } } = await axios(url)

  const result = CriptoPriceSchema.safeParse(DISPLAY[cryptoCurrency][currency])
  if (result.success) return result.data
}
