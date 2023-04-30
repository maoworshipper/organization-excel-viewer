import { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./ProfileCard.module.scss";
import { TEXT } from "../../strings";

export const ProfileCard = ({
  Nombre = "",
  Fecha_de_ingreso = "",
  Sueldo_bruto = "",
  Division = "",
  Area = "",
  Subarea = "",
  Nivel_Jerarquico = "",
}) => {
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

  const getInitials = (name) => {
    const names = name.split(" ");
    let initials = "";
    names.forEach((n) => {
      initials += n[0];
    });
    return initials;
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {image === null ? (
          <div className={styles.imagePlaceholder} onClick={openFileDialog} title={TEXT.UPLOAD_IMAGE}>
            <input
              type="file"
              accept=".jpg, .png, .jpeg"
              onChange={handleImage}
              ref={inputFile}
              className={styles.hidden}
            />
            <p className={styles.textPlaceholder}>
              {getInitials(Nombre)}
            </p>
          </div>
        ) : (
          <img src={image} alt={Nombre} className={styles.image} />
        )}
      </div>
      <div className={styles.content}>
        <h2 className={styles.boldText}>{Nombre}</h2>
        <h3 className={styles.normalText}>{Nivel_Jerarquico}</h3>
        <h3
          className={styles.normalText}
        >{`${Division} - ${Area} - ${Subarea}`}</h3>
      </div>
      <div className={styles.dataContainer}>
        <div className={styles.extraData}>
          <p className={styles.smallText}>{TEXT.INCOME_DATE}</p>
          <p className={styles.boldText}>{Fecha_de_ingreso}</p>
        </div>
        <div className={styles.extraData}>
          <p className={styles.smallText}>{TEXT.GROSS_SALARY}</p>
          <p className={styles.boldText}>
            $ {new Intl.NumberFormat("es-CO").format(Sueldo_bruto)}
          </p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  Nombre: PropTypes.string,
  Fecha_de_ingreso: PropTypes.string,
  Sueldo_bruto: PropTypes.string,
  Division: PropTypes.string,
  Area: PropTypes.string,
  Subarea: PropTypes.string,
  Nivel_Jerarquico: PropTypes.string,
};
