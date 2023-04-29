import { useState, useEffect } from "react";
import { useDataStore } from "../../store/data";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./Select.module.scss";

export const SelectComponent = () => {
  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("");
  const data = useDataStore((state) => state.data);
  const setFilteredData = useDataStore((state) => state.setFilteredData);

  useEffect(() => {
    const months = data.map((obj) => obj.Mes);
    const uniqueMonths = [...new Set(months)];
    setMonths(uniqueMonths);
  }, [data]);

  const handleChange = (event) => {
    setFilteredData(event.target.value);
    setMonthSelected(event.target.value);
  };

  return (
    <div className={styles.container}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Filtrar por Mes</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Filtrar por Mes"
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
