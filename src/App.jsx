import { Input } from "./components/Input/Input";
import { DataTable } from "./components/DataTable/DataTable";
import useData from "./hooks/useData";
import "./App.css";

function App() {
  const { importData } = useData();

  return (
    <>
      <Input handleChange={importData} />
      <DataTable />
    </>
  );
}

export default App;
