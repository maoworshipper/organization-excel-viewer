import { Input } from "./components/Input/Input";
import { DataTable } from "./components/DataTable/DataTable";
import useData from "./hooks/useData";
import Button from "@mui/material/Button";
import { SelectComponent as Select } from "./components/Select/Select";
import { OrganizationChart } from "./components/OrganizationChart/OrganizationChart";
import { formatNumber } from "./utils/formatNumber";
import { TEXT } from "./strings";
import styles from "./App.module.scss";

function App() {
  const { isFiltered, show, total, importData, showChart } = useData();

  return (
    <main className={styles.main}>
      {!show.elements ? (
        <div className={styles.initialSection}>
          <h1 className={styles.title}>{TEXT.TITLE}</h1>
          <p>{TEXT.SUBTITLE}</p>
          <Input handleChange={importData} />
        </div>
      ) : null}
      <div className={styles.dataSection}>
        <div
          className={`${styles.dataHeader} ${show.chart ? styles.stretch : ""}`}
        >
          {show.elements ? (
            <>
              <Select />
              <div className={styles.total}>
                <span>{TEXT.TOTAL}</span>
                <span className={styles.value}>
                  {isFiltered ? `$ ${formatNumber(total)}` : "-"}
                </span>
              </div>
              <Button
                variant="contained"
                onClick={showChart}
                disabled={
                  (show.chart && isFiltered) || !show.chart
                    ? !isFiltered
                    : isFiltered
                }
              >
                {show.chart ? TEXT.SEE_TABLE : TEXT.SEE_CHART}
              </Button>
            </>
          ) : null}
        </div>
        {!show.chart ? <DataTable /> : null}
      </div>
      {show.chart && isFiltered ? <OrganizationChart /> : null}
    </main>
  );
}

export default App;
