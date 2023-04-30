import { useRef } from "react";
import { useDataStore } from "../store/data";

export const useImage = () => {
  const inputFile = useRef(null);
  const setImage = useDataStore((state) => state.setImage);

  const openFileDialog = () => {
    inputFile.current.click();
  };

  const handleImage = (e, id) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
        setImage(URL.createObjectURL(e.target.files[0]), id);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return { openFileDialog, handleImage, inputFile };
};
