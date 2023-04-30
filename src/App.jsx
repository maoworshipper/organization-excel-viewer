import { useRef } from "react";
import { useDataStore } from "./store/data";
import { useLanguageStore } from "./store/language";
import { useReactToPrint } from "react-to-print";
import { Input } from "./components/Input/Input";
import { DataTable } from "./components/DataTable/DataTable";
import useData from "./hooks/useData";
import { Button } from "./components/Button/Button";
import { SelectComponent as Select } from "./components/Select/Select";
import { OrganizationChart } from "./components/OrganizationChart/OrganizationChart";
import { TEXT } from "./strings";
import styles from "./App.module.scss";
import { InfoBox } from "./components/InfoBox/InfoBox";
import { LanguageSwitcher } from "./components/LanguageSwitcher/LanguageSwitcher";

function App() {
  const { show, importData, values } = useData();
  const promoted = useDataStore((state) => state.promoted);
  const newEmployees = useDataStore((state) => state.newEmployees);
  const language = useLanguageStore((state) => state.language);
  const toPrint = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => toPrint.current,
  });

  const renderInitialSection = () => {
    return (
      <div className={styles.initialSection}>
        <h1 className={styles.title}>{TEXT[language].TITLE}</h1>
        <p>{TEXT[language].SUBTITLE}</p>
        <Input handleChange={importData} />
      </div>
    );
  };

  const renderRightSection = () => {
    return show.elements ? (
      <div className={styles.right}>
        <InfoBox title={TEXT[language].TOTAL} data={values.total} />
        {promoted.length ? <InfoBox {...values.promotedBox} /> : null}
        {newEmployees.length ? <InfoBox {...values.hiredBox} /> : null}
        {values.chart ? (
          <Button onClick={handlePrint} {...values.buttonPrint} />
        ) : null}
      </div>
    ) : null;
  };

  return (
    <>
    <main className={styles.main}>
      <div className={styles.left}>
        {!show.elements ? (
          renderInitialSection()
        ) : (
          <div className={styles.dataSection}>
            <div className={`${styles.header} ${show.chart ? styles.xs : ""}`}>
              <Select />
              <Button {...values.buttonChart} />
            </div>
            {!show.chart ? <DataTable /> : null}
          </div>
        )}
        <div ref={toPrint}>{values.chart ? <OrganizationChart /> : null}</div>
      </div>
      {renderRightSection()}
    </main>
    <LanguageSwitcher />
    </>
  );
}

export default App;
