import { create } from "zustand";
import { CryptoCurrency, CryptoPrice, Pair } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptos, getData } from "./apis/CryptoApi";

type CryptoStore = {
  crytoscurrencies: CryptoCurrency
  cryptoData: CryptoPrice
  loading: boolean
  fetchCriptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

const initialState = {
  PRICE: "",
  LOWDAY: "",
  LASTUPDATE: "",
  IMAGEURL: "",
  HIGHDAY: "",
  CHANGEPCT24HOUR: ""
}

// set se usa para escribir en el state
export const useCriptoStore = create<CryptoStore>()(devtools(
  ((set) => ({
    crytoscurrencies: [],
    cryptoData: initialState,
    loading: false,
    fetchCriptos: async () => {
      const cryptosCurrencies = await getCriptos()
      set(() => ({
        crytoscurrencies: cryptosCurrencies
      }))
    },
    fetchData : async (pair) => {
      set(() => ({
        loading: true,
        cryptoData: initialState
      }))

      const cryptoData = await getData(pair)
      
      set(() => ({
        cryptoData,
        loading: false
      }))
    }
  })
)))