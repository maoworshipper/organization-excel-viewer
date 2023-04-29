import { DataGrid } from "@mui/x-data-grid";
import { useDataStore } from "../../store/data";

export const DataTable = () => {
  const data = useDataStore((state) => state.data);

  const columns = [
    { field: "id", headerName: "No" },
    { field: "Mes" },
    { field: "Nombre" },
    { field: "ID" },
    { field: "Fecha_de_ingreso", headerName: "Fecha de ingreso" },
    { field: "Sueldo_bruto", headerName: "Sueldo bruto" },
    { field: "Division", headerName: "División" },
    { field: "Area", headerName: "Área" },
    { field: "Subarea" },
    { field: "ID_Lider", headerName: "ID Lider" },
    { field: "Nivel_Jerarquico", headerName: "Nivel Jerárquico" },
  ];

  return (
    <>
      {data?.length > 0 ? (
        <>
          <div style={{ height: 600, width: "100%" }}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                ...data.initialState,
                pagination: { paginationModel: { pageSize: 10 } },
              }}
              pageSizeOptions={[10, 20, 50]}
            />
          </div>
        </>
      ) : (
        <p>No hay datos para mostrar</p>
      )}
    </>
  );
};
