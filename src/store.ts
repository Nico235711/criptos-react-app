import { create } from "zustand";
import { CryptoCurrency } from "./types";
import { devtools } from "zustand/middleware";
import { getCriptos } from "./apis/CryptoApi";

type CryptoStore = {
  crytoscurrencies: CryptoCurrency
  fetchCriptos: () => Promise<void>
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
    }
  })
)))