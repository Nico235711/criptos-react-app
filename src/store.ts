import axios from "axios";
import { create } from "zustand";
import { CriptoResponseSchema } from "./schema/cripto-schema";

async function getCriptos() {
  const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
  const { data: { Data } }  = await axios(url)  
  // @result se fija si Data corresponde al schema
  // @result retorna false porque si bien es un objeto tambien es un arreglo
  const result = CriptoResponseSchema.safeParse(Data)
  console.log(result);
  
}

export const useCriptoStore = create(() => ({
  fetchCriptos: () => {
    getCriptos()
  }
}))