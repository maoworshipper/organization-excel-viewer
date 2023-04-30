import { create } from "zustand";
import { TEXT } from "../strings";

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
      monthSelected !== "" && monthSelected !== TEXT.REMOVE_FILTER
        ? data.filter((obj) => obj.Mes === monthSelected)
        : data;
    set({ filteredData });
  },
}));
