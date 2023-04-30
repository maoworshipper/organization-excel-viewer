import { useState, useEffect } from "react";
import { useDataStore } from "../../store/data";
import { useLanguageStore } from "../../store/language";
import { TEXT } from "../../strings";

export const useSelect = () => {
  const [months, setMonths] = useState([]);
  const [monthSelected, setMonthSelected] = useState("");
  const data = useDataStore((state) => state.data);
  const setFilteredData = useDataStore((state) => state.setFilteredData);
  const setPromoted = useDataStore((state) => state.setPromoted);
  const setNewEmployees = useDataStore((state) => state.setNewEmployees);
  const language = useLanguageStore((state) => state.language);

  const handleChange = (event) => {
    const value = event.target.value;
    setFilteredData(value, TEXT[language].REMOVE_FILTER);
    if (value !== TEXT[language].REMOVE_FILTER) {
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
    uniqueMonths.length > 0 &&
      uniqueMonths.unshift(TEXT[language].REMOVE_FILTER);
    setMonths(uniqueMonths);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (months.length > 0) {
      const monthsValues = months.slice(1);
      monthsValues.length > 0 &&
        monthsValues.unshift(TEXT[language].REMOVE_FILTER);
      setMonths(monthsValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  return { months, monthSelected, handleChange };
};
