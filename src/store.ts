import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptos, getData } from "./apis/CryptoApi";

type CryptoStore = {
  crytoscurrencies: CryptoCurrency
  cryptoData: CryptoPrice
  fetchCriptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

// set se usa para escribir en el state
export const useCriptoStore = create<CryptoStore>()(devtools(
  ((set) => ({
    crytoscurrencies: [],
    cryptoData: {
      PRICE: "",
      LOWDAY: "",
      LASTUPDATE: "",
      IMAGEURL: "",
      HIGHDAY: "",
      CHANGEPCT24HOUR: ""
    },
    fetchCriptos: async () => {
      const cryptosCurrencies = await getCriptos()
      set(() => ({
        crytoscurrencies: cryptosCurrencies
      }))
    },
    fetchData : async (pair) => {
      const cryptoData = await getData(pair)
      
      set(() => ({
        cryptoData
      }))
    }
  })
)))