import propTypes from "prop-types";
import styles from "./InfoBox.module.scss";

export const InfoBox = ({ title = "", data = [] }) => {
  return (
    <div className={styles.infoBox}>
      <span>{title}</span>
      {data.length > 0
        ? data.map((item, index) => (
            <span key={`info-box-${index}`} className={styles.value}>
              {item}
            </span>
          ))
        : null}
    </div>
  );
};

InfoBox.propTypes = {
  title: propTypes.string,
  data: propTypes.array,
};
