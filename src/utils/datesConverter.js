export const datesConverter = (excelDate, format) => {
  const newDate = new Date((excelDate - (25567 + 1)) * 86400 * 1000);
  const year = newDate.getFullYear();
  const month =
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;
  const day =
    newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate();

  const formats = {
    "DD-MM-YYYY": `${day}-${month}-${year}`,
    "MM-YYYY": `${month}-${year}`,
  };

  return formats[format];
};

export const getLastMonth = (date) => {
  const newDate = date.split("-");
  const year = newDate[1];
  const month = newDate[0];
  const lastMonth = month - 1 === 0 ? 12 : month - 1;
  return lastMonth < 10 ? `0${lastMonth}-${year}` : `${lastMonth}-${year}`;
};

export const getMonth = (date) => {
  const newDate = date.split("-");
  const month = newDate.length > 2 ? newDate[1] : newDate[0];
  const year = newDate.length > 2 ? newDate[2] : newDate[1];
  return `${month}-${year}`;
};
