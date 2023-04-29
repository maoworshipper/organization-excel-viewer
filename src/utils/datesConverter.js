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
