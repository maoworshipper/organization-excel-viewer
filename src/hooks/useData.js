import { read, utils } from "xlsx";
import { useDataStore } from "../store/data";
import { formatKeysData } from "../utils/objectsFormatter";

const useData = () => {
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

    return { importData };
};

export default useData;