import { create } from "zustand";

export const useDataStore = create((set) => ({
  data: [],
  filteredData: [],
  setData: (data) => {
    set({ data });
    set({ filteredData: data })
  },
  setFilteredData: (monthSelected) => {
    const data = useDataStore.getState().data;
    const filteredData =
      monthSelected !== ""
        ? data.filter((obj) => obj.Mes === monthSelected)
        : data;
    set({ filteredData });
  },
}));
