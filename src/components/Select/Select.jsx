import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelect } from "./useSelect";
import { TEXT } from "../../strings";
import styles from "./Select.module.scss";

export const SelectComponent = () => {
  const { months, monthSelected, handleChange } = useSelect();

  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {TEXT.FILTER_BY_MONTH}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label={TEXT.FILTER_BY_MONTH}
          value={monthSelected}
          onChange={handleChange}
        >
          {months.map((month) => (
            <MenuItem key={`select-month-${month}`} value={month}>
              {month}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
