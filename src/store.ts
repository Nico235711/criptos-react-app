import { create } from "zustand";
import { CryptoCurrency, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptos, getData } from "./apis/CryptoApi";

type CryptoStore = {
  crytoscurrencies: CryptoCurrency
  fetchCriptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

// set se usa para escribir en el state
export const useCriptoStore = create<CryptoStore>()(devtools(
  ((set) => ({
    crytoscurrencies: [],
    fetchCriptos: async () => {
      const cryptosCurrencies = await getCriptos()
      set(() => ({
        crytoscurrencies: cryptosCurrencies
      }))
    },
    fetchData : async (pair) => {
      const cryptosData = await getData(pair)
    }
  })
)))