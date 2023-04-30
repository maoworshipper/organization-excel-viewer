import { getLastMonth, getMonth } from "./datesConverter";

export const getTotalPayroll = (filteredData) => {
  return filteredData.reduce((acc, obj) => acc + obj.Sueldo_bruto, 0);
};

export const getNewEmployeesNames = (filteredData) => {
  const newEmployees = filteredData.filter(
    (itemFiltered) =>
      getMonth(itemFiltered.Mes) === getMonth(itemFiltered.Fecha_de_ingreso)
  );
  const newEmployeesNames = newEmployees.map((item) => item.Nombre);
  return newEmployeesNames;
};

export const getPromotedNames = (data, filteredData) => {
  const promoted = filteredData.map((itemFiltered) => {
    const lastMonth = getLastMonth(itemFiltered.Mes);
    const isPromoted = data.find((item) => {
      return (
        item.Mes === lastMonth &&
        item.ID === itemFiltered.ID &&
        item.Sueldo_bruto < itemFiltered.Sueldo_bruto
      );
    });
    return { ...itemFiltered, isPromoted: isPromoted ? true : false };
  });
  const isPromoted = promoted.filter((item) => item.isPromoted);
  const promotedNames = isPromoted.map((item) => item.Nombre);
  return promotedNames;
};
