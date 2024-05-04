import { create } from "zustand";

export const useCriptoStore = create(() => ({
  fetchCriptos: () => {
    console.log("desde store");
    
  }
}))