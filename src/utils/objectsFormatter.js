import { datesConverter } from "./datesConverter";

const dateTypes = {
  "Fecha de ingreso": "DD-MM-YYYY",
  Mes: "MM-YYYY",
};
export const formatKeysData = (data) => {
  return data.map((obj, index) => {
    const newObj = {};
    for (let key in obj) {
      const newKey = key
        .trim()
        .replace(/\s+/g, "_")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");

      const value =
        key === "Fecha de ingreso" || key === "Mes"
          ? datesConverter(obj[key], dateTypes[key])
          : obj[key];

      newObj[newKey] = value;
    }
    Object.assign(newObj, { id: index + 1 });
    return newObj;
  });
};
