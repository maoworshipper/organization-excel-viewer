import PropTypes from "prop-types";
import { ProfileImage } from "./ProfileImage";
import styles from "./ProfileCard.module.scss";
import { formatNumber } from "../../utils/formatNumber";
import { TEXT } from "../../strings";

export const ProfileCard = ({
  ID,
  Nombre = "",
  Fecha_de_ingreso = "",
  Sueldo_bruto = "",
  Division = "",
  Area = "",
  Subarea = "",
  Nivel_Jerarquico = "",
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ProfileImage name={Nombre} id={ID} />
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
          <p className={styles.boldText}>$ {formatNumber(Sueldo_bruto)}</p>
        </div>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  ID: PropTypes.number,
  Nombre: PropTypes.string,
  Fecha_de_ingreso: PropTypes.string,
  Sueldo_bruto: PropTypes.number,
  Division: PropTypes.string,
  Area: PropTypes.string,
  Subarea: PropTypes.string,
  Nivel_Jerarquico: PropTypes.string,
};
