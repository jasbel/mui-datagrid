import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EyeIcon from "@mui/icons-material/RemoveRedEye";
import EditIcon from "@mui/icons-material/Edit";
// import { DataGridPro, GridActionsCellItem } from "@mui/x-data-grid-pro";
// import { randomCreatedDate, randomTraderName, randomEmail, randomUpdatedDate } from "@mui/x-data-grid-generator";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const rows = [
  {
    id: 1,
    name: "name0",
    email: "randomEmail0",
    age: 25,
    dateCreated: "01/01/2022",
    lastLogin: "randomUpdatedDate0",
  },
  {
    id: 2,
    name: "name1",
    email: "randomEmail1",
    age: 36,
    dateCreated: "01/01/2023",
    lastLogin: "randomUpdatedDate1",
  },
  {
    id: 3,
    name: "name2",
    email: "randomEmail2",
    age: 19,
    dateCreated: "01/01/2024",
    lastLogin: "randomUpdatedDate2",
  },
  {
    id: 4,
    name: "name3",
    email: "randomEmail3",
    age: 28,
    dateCreated: "01/01/2025",
    lastLogin: "randomUpdatedDate3",
  },
  {
    id: 5,
    name: "name4",
    email: "randomEmail4",
    age: 23,
    dateCreated: "01/01/2026",
    lastLogin: "randomUpdatedDate4",
  },
  {
    id: 6,
    name: "name5",
    email: "randomEmail5",
    age: 27,
    dateCreated: "01/01/2027",
    lastLogin: "randomUpdatedDate5",
  },
  {
    id: 7,
    name: "name6",
    email: "randomEmail6",
    age: 18,
    dateCreated: "01/01/2028",
    lastLogin: "randomUpdatedDate6",
  },
  {
    id: 8,
    name: "name7",
    email: "randomEmail7",
    age: 31,
    dateCreated: "01/01/2029",
    lastLogin: "randomUpdatedDate7",
  },
  {
    id: 9,
    name: "name8",
    email: "randomEmail8",
    age: 24,
    dateCreated: "01/01/20210",
    lastLogin: "randomUpdatedDate8",
  },
  {
    id: 10,
    name: "name9",
    email: "randomEmail9",
    age: 35,
    dateCreated: "01/01/20211",
    lastLogin: "randomUpdatedDate9",
  },
];

export const DataGridComponent = () => {
  const [hoveredRow, setHoveredRow] = React.useState(null as any);

  const onMouseEnterRow = (event: { currentTarget: { getAttribute: (arg0: string) => any } }) => {
    const id = Number(event.currentTarget.getAttribute("data-id"));
    setHoveredRow(id);
  };

  const onMouseLeaveRow = (event: any) => {
    setHoveredRow(null);
  };

  const editRow = (id: number | string) => {
    console.log(`edit row ${id}`);
    const row = rows.find((row) => row.id === Number(id));
    console.log({ row });
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 160, editable: true },
    { field: "email", headerName: "Email", width: 200, editable: true },
    { field: "age", headerName: "Age", type: "number", editable: true },
    {
      field: "dateCreated",
      headerName: "Date Created",
      type: "date",
      width: 180,
      editable: true,
    },
    {
      field: "lastLogin",
      headerName: "Last Login",
      type: "dateTime",
      width: 220,
      editable: true,
    },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              // backgroundColor: "whitesmoke",
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton onClick={() => console.log(params.id)} color={hoveredRow === params.id ? "success" : "secondary"}>
              <EyeIcon />
            </IconButton>
            <IconButton onClick={() => editRow(params.id)} color={hoveredRow === params.id ? "success" : "secondary"}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => console.log(params.id)} color={hoveredRow === params.id ? "success" : "secondary"}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <DataGrid
        // checkboxSelection
        rows={rows}
        columns={columns}
        // initialState={{ pinnedColumns: { right: ["actions"] } }}
        componentsProps={{
          row: {
            onMouseEnter: onMouseEnterRow,
            onMouseLeave: onMouseLeaveRow,
          },
        }}
        sx={{
          "& .MuiDataGrid-iconSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-pinnedColumnHeaders": {
            boxShadow: "none",
            backgroundColor: "transparent",
          },
          "& .MuiDataGrid-pinnedColumns": {
            boxShadow: "none",
            // backgroundColor: "transparent",
            "& .MuiDataGrid-cell": {
              padding: 0,
            },
          },
          "& .MuiDataGrid-row": {
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "whitesmoke",
            },
            "&:first-child": {
              borderTop: "1px solid rgba(224, 224, 224, 1)",
            },
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }}
      />
    </div>
  );
};
