import { useState, useRef } from "react";

export const useImage = () => {
  const [image, setImage] = useState(null);
  const inputFile = useRef(null);

  const openFileDialog = () => {
    inputFile.current.click();
  };

  const handleImage = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return { image, openFileDialog, handleImage, inputFile };
};
