import PropTypes from "prop-types";
import { TEXT } from "../../strings";
import styles from "./Input.module.scss";

export const Input = ({ handleChange }) => {
  return (
    <div className={styles.container}>
      <label htmlFor="inputUploadFile">{TEXT.ACCEPTED_FORMATS}</label>
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
