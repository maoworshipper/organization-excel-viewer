import { useState, useEffect } from "react";
import { useDataStore } from "../../store/data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./Select.module.scss";
import { TEXT } from "../../strings";

export const SelectComponent = () => {
  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("");
  const data = useDataStore((state) => state.data);
  const setFilteredData = useDataStore((state) => state.setFilteredData);

  useEffect(() => {
    const months = data.map((obj) => obj.Mes);
    const uniqueMonths = [...new Set(months)];
    uniqueMonths.length > 0 && uniqueMonths.unshift(TEXT.REMOVE_FILTER);
    setMonths(uniqueMonths);
  }, [data]);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilteredData(value);
    value !== TEXT.REMOVE_FILTER ? setMonthSelected(value) : setMonthSelected("");
  };

  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{TEXT.FILTER_BY_MONTH}</InputLabel>
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
