import { useEffect, useState } from "react";
import { useDataStore } from "./store/data";
import { Input } from "./components/Input/Input";
import { DataTable } from "./components/DataTable/DataTable";
import useData from "./hooks/useData";
import Button from "@mui/material/Button";
import { SelectComponent as Select } from "./components/Select/Select";
import { OrganizationChart } from "./components/OrganizationChart/OrganizationChart";
import { TEXT } from "./strings";
import styles from "./App.module.scss";

function App() {
  const [show, setShow] = useState({
    elements: false,
    chart: false,
  });
  const data = useDataStore((state) => state.data);
  const { importData } = useData();

  const showChart = () => {
    setShow({ ...show, chart: !show.chart });
  };

  useEffect(() => {
    data.length > 0
      ? setShow({ ...show, elements: true })
      : setShow({ ...show, elements: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <main className={styles.main}>
      <div className={styles.initialSection}>
        <h1 className={styles.title}>{TEXT.TITLE}</h1>
        <p>{TEXT.SUBTITLE}</p>
        {!show.elements ? <Input handleChange={importData} /> : null}
      </div>
      <div className={styles.dataSection}>
        <div className={`${styles.dataHeader} ${show.chart ? styles.stretch : ''}`}>
          {show.elements ? <Select /> : null}
          {show.elements ? (
            <Button variant="contained" onClick={showChart}>
              {show.chart ? TEXT.SEE_TABLE : TEXT.SEE_CHART}
            </Button>
          ) : null}
        </div>
        {!show.chart ? <DataTable /> : null}
      </div>
      {show.chart ? <OrganizationChart /> : null}
    </main>
  );
}

export default App;
