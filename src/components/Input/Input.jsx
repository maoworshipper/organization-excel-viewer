import PropTypes from "prop-types";
import styles from "./Input.module.scss";

export const Input = ({ handleChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="inputUploadFile">Seleccionar archivo CSV o Excel (.csv, .xlsx, .xls)</label>
      <input
        type="file"
        name="file"
        id="inputUploadFile"
        required
        onChange={(e) => handleChange(e)}
        accept=".csv, .xlsx, .xls"
      />
    </div>
  );
};

Input.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
