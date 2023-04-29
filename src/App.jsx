import { Input } from "./components/Input/Input";
import { DataTable } from "./components/DataTable/DataTable";
import useData from "./hooks/useData";
import "./App.css";
import Button from "@mui/material/Button";
import { SelectComponent as Select } from "./components/Select/Select";

function App() {
  const { importData } = useData();

  return (
    <>
      <Select />
      <Input handleChange={importData} />
      <DataTable />
      <Button variant="contained">Ver Organigrama</Button>
    </>
  );
}

export default App;
