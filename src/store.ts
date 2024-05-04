import axios from "axios";
import { create } from "zustand";
import { CriptoResponseSchema } from "./schema/cripto-schema";
import { CryptoCurrency } from "./types";

type CryptoStore = {
  crytoscurrencies: CryptoCurrency
  fetchCriptos: () => Promise<void>
}

async function getCriptos() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
  const { data: { Data } }  = await axios(url)  
  // @result se fija si Data corresponde al schema
  // @result retorna false porque si bien es un objeto tambien es un arreglo
  const result = CriptoResponseSchema.safeParse(Data)
  if (result)  return result.data
}

// set se usa para escribir en el state
export const useCriptoStore = create<CryptoStore>((set) => ({
  crytoscurrencies: [],
  fetchCriptos: async () => {
    const cryptosCurrencies = await getCriptos()
    set(() => ({
      crytoscurrencies: cryptosCurrencies
    }))
  }
}))