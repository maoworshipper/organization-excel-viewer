import { useEffect, useState } from "react";
import { read, utils } from "xlsx";
import { useDataStore } from "../store/data";
import { formatKeysData } from "../utils/objectsFormatter";

const useData = () => {
  const [show, setShow] = useState({
    elements: false,
    chart: false,
  });
  const [total, setTotal] = useState(0);
  const filteredData = useDataStore((state) => state.filteredData);
  const data = useDataStore((state) => state.data);
  const setData = useDataStore((state) => state.setData);

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
    const total = filteredData.reduce((acc, obj) => acc + obj.Sueldo_bruto, 0);
    setTotal(total);
  }, [filteredData]);

  return { show, total, importData, showChart };
};

export default useData;
