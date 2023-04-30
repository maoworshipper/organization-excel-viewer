import { create } from "zustand";
import { TEXT } from "../strings";

export const useDataStore = create((set) => ({
  data: [],
  filteredData: [],
  promoted: [],
  newEmployees: [],
  images: [],
  setData: (data) => {
    set({ data });
    set({ filteredData: data });
  },
  setImage: (image, id) => {
    if (id === undefined) return;
    const images = useDataStore.getState().images;
    set({
      images: [...images.filter((obj) => obj.id !== id), { image, id }],
    });
  },
  setFilteredData: (monthSelected) => {
    const data = useDataStore.getState().data;
    const filteredData =
      monthSelected !== "" && monthSelected !== TEXT.REMOVE_FILTER
        ? data.filter((obj) => obj.Mes === monthSelected)
        : data;
    set({ filteredData });
  },
  setPromoted: (promoted) => set({ promoted }),
  setNewEmployees: (newEmployees) => set({ newEmployees }),
}));
