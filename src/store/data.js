import { create } from "zustand";

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
  setFilteredData: (monthSelected, removeFilterText) => {
    const data = useDataStore.getState().data;
    const filteredData =
      monthSelected !== "" && monthSelected !== removeFilterText
        ? data.filter((obj) => obj.Mes === monthSelected)
        : data;
    set({ filteredData });
  },
  setPromoted: (promoted) => set({ promoted }),
  setNewEmployees: (newEmployees) => set({ newEmployees }),
}));
