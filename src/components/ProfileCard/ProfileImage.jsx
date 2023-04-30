import { useState } from "react";
import PropTypes from "prop-types";
import { useDataStore } from "../../store/data";
import { useLanguageStore } from "../../store/language";
import { useImage } from "../../hooks/useImage";
import { getInitials } from "../../utils/getInitials";
import styles from "./ProfileCard.module.scss";
import { TEXT } from "../../strings";
import { useEffect } from "react";

export const ProfileImage = ({ id, name }) => {
  const [image, setImage] = useState("");
  const images = useDataStore((state) => state.images);
  const language = useLanguageStore((state) => state.language);
  const { openFileDialog, handleImage, inputFile } = useImage();

  useEffect(() => {
    const newImage = images.find((obj) => obj.id === id)?.image || "";
    setImage(newImage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images]);

  return (
    <>
      {image === "" ? (
        <div
          className={styles.imagePlaceholder}
          onClick={openFileDialog}
          title={TEXT[language].UPLOAD_IMAGE}
        >
          <p className={styles.textPlaceholder}>{getInitials(name)}</p>
        </div>
      ) : (
        <img
          src={image}
          alt={name}
          className={styles.image}
          onClick={openFileDialog}
        />
      )}
      <input
        type="file"
        accept=".jpg, .png, .jpeg"
        onChange={(e) => handleImage(e, id)}
        ref={inputFile}
        className={styles.hidden}
      />
    </>
  );
};

ProfileImage.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
};
