import { useState, useEffect } from "react";
import { useDataStore } from "../../store/data";
import { TEXT } from "../../strings";

export const useSelect = () => {
  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("");
  const data = useDataStore((state) => state.data);
  const setFilteredData = useDataStore((state) => state.setFilteredData);
  const setPromoted = useDataStore((state) => state.setPromoted);
  const setNewEmployees = useDataStore((state) => state.setNewEmployees);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilteredData(value);
    if (value !== TEXT.REMOVE_FILTER) {
      setMonthSelected(value);
    } else {
      setMonthSelected("");
      setPromoted([]);
      setNewEmployees([]);
    }
  };

  useEffect(() => {
    const months = data.map((obj) => obj.Mes);
    const uniqueMonths = [...new Set(months)];
    uniqueMonths.length > 0 && uniqueMonths.unshift(TEXT.REMOVE_FILTER);
    setMonths(uniqueMonths);
  }, [data]);

  return { months, monthSelected, handleChange };
};
