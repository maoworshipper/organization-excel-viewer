import PropTypes from "prop-types";
import { useImage } from "../../hooks/useImage";
import { getInitials } from "../../utils/getInitials";
import styles from "./ProfileCard.module.scss";
import { TEXT } from "../../strings";

export const ProfileImage = ({ name }) => {
  const { image, openFileDialog, handleImage, inputFile } = useImage();

  return (
    <>
      {image === null ? (
        <div
          className={styles.imagePlaceholder}
          onClick={openFileDialog}
          title={TEXT.UPLOAD_IMAGE}
        >
          <input
            type="file"
            accept=".jpg, .png, .jpeg"
            onChange={handleImage}
            ref={inputFile}
            className={styles.hidden}
          />
          <p className={styles.textPlaceholder}>{getInitials(name)}</p>
        </div>
      ) : (
        <img src={image} alt={name} className={styles.image} />
      )}
    </>
  );
};

ProfileImage.propTypes = {
  name: PropTypes.string,
};
