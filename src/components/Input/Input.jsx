import PropTypes from "prop-types";
import { useLanguageStore } from "../../store/language";
import { TEXT } from "../../strings";
import styles from "./Input.module.scss";

export const Input = ({ handleChange }) => {
  const language = useLanguageStore((state) => state.language);
  return (
    <div className={styles.container}>
      <label htmlFor="inputUploadFile">{TEXT[language].ACCEPTED_FORMATS}</label>
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
