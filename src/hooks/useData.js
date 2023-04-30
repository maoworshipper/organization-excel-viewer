import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import { useDataStore } from "../store/data";
import { formatKeysData } from "../utils/objectsFormatter";
import {
  getPromotedNames,
  getNewEmployeesNames,
  getTotalPayroll,
} from "../utils/getPayrollChanges";

const useData = () => {
  const [show, setShow] = useState({
    elements: false,
    chart: false,
  });
  const [isFiltered, setIsFiltered] = useState(false);
  const [total, setTotal] = useState(0);
  const filteredData = useDataStore((state) => state.filteredData);
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);
  const setPromoted = useDataStore((state) => state.setPromoted);
  const setNewEmployees = useDataStore((state) => state.setNewEmployees);

  const importData = (e) => {
    const files = e.target.files;
    if (files.length) {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        const wb = read(event.target.result);
        const sheets = wb.SheetNames;

        if (sheets.length) {
          const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
          const formattedRows = formatKeysData(rows);
          setData(formattedRows);
        }
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const showChart = () => {
    setShow({ ...show, chart: !show.chart });
  };

  useEffect(() => {
    data.length > 0
      ? setShow({ ...show, elements: true })
      : setShow({ ...show, elements: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (filteredData.length > 0 && filteredData.length !== data.length) {
      const total = getTotalPayroll(filteredData);
      setTotal(total);
      const promotedNames = getPromotedNames(data, filteredData);
      setPromoted(promotedNames);
      const newEmployeesNames = getNewEmployeesNames(filteredData);
      setNewEmployees(newEmployeesNames);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredData]);

  return { isFiltered, show, total, importData, showChart };
};

export default useData;
