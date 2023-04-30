import { DataGrid } from "@mui/x-data-grid";
import { useDataStore } from "../../store/data";
import { useLanguageStore } from "../../store/language";
import styles from "./DataTable.module.scss";
import { TEXT, NUMBERS } from "../../strings";

export const DataTable = () => {
  const data = useDataStore((state) => state.filteredData);
  const language = useLanguageStore((state) => state.language);

  const columns = [
    {
      field: TEXT[language].REAL_ID,
      headerName: TEXT[language].NO,
      width: NUMBERS.NO,
    },
    {
      field: TEXT[language].MONTH,
      headerName: TEXT[language].MONTH_LABEL,
      width: NUMBERS.MONTH,
    },
    {
      field: TEXT[language].NAME,
      headerName: TEXT[language].NAME_LABEL,
      width: NUMBERS.NAME,
    },
    { field: TEXT[language].ID, width: NUMBERS.ID },
    {
      field: TEXT[language].INCOME_DATE,
      headerName: TEXT[language].INCOME_DATE_LABEL,
      width: NUMBERS.INCOME_DATE,
    },
    {
      field: TEXT[language].GROSS_SALARY,
      headerName: TEXT[language].GROSS_SALARY_LABEL,
      width: NUMBERS.GROSS_SALARY,
    },
    {
      field: TEXT[language].DIVISION,
      headerName: TEXT[language].DIVISION_LABEL,
      width: NUMBERS.DIVISION,
    },
    {
      field: TEXT[language].AREA,
      headerName: TEXT[language].AREA_LABEL,
      width: NUMBERS.AREA,
    },
    { field: TEXT[language].SUBAREA, width: NUMBERS.SUBAREA },
    {
      field: TEXT[language].LEADER_ID,
      headerName: TEXT[language].LEADER_ID_LABEL,
      width: NUMBERS.LEADER_ID,
    },
    {
      field: TEXT[language].HIERARCHICAL_LEVEL,
      headerName: TEXT[language].HIERARCHICAL_LEVEL_LABEL,
      width: NUMBERS.HIERARCHICAL_LEVEL,
    },
  ];

  return (
    <>
      {data?.length > 0 ? (
        <>
          <div className={styles.container}>
            <DataGrid
              rows={data}
              columns={columns}
              initialState={{
                ...data.initialState,
                pagination: {
                  paginationModel: { pageSize: NUMBERS.PAGINATION },
                },
              }}
              pageSizeOptions={NUMBERS.PAGINATION_OPTIONS}
            />
          </div>
        </>
      ) : null}
    </>
  );
};
