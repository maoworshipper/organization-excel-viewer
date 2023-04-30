import { create } from "zustand";

export const useLanguageStore = create((set) => ({
  language: "es",
  setLanguage: (language) => set({ language }),
}));
