import { Button, Stack, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
// import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "ticker",
    label: "Ticker",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "quantity",
    label: "Quantity",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "volum",
    label: "Volum",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "price",
    label: "Price",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 100,
    align: "center",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, ticker, quantity, volum, price, action) {
  return { name, ticker, quantity, volum, price, action };
}

const rows = [
  createData(
    "India",
    "IN",
    1324171354,
    32872,
    32872,
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
  createData(
    "China",
    "CN",
    1403509,
    9596961,
    32872,
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
  createData(
    "Italy",
    "IT",
    604839,
    301340,
    32872,
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
  createData(
    "United States",
    "US",
    3271674,
    9833520,
    32872,
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
    </Stack>
  ),
  createData(
    "Canada",
    "CA",
    3760210,
    9984670,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Australia",
    "AU",
    2547540,
    7692024,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Germany",
    "DE",
    8301920,
    357578,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Ireland",
    "IE",
    4857000,
    70273,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Mexico",
    "MX",
    1265776,
    1972550,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Japan",
    "JP",
    1263170,
    377973,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "France",
    "FR",
    670220,
    640679,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "United Kingdom",
    "GB",
    675457,
    242495,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Russia",
    "RU",
    14679374,
    17098246,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Nigeria",
    "NG",
    2009624,
    923768,
    32872,
    <Typography>click</Typography>
  ),
  createData(
    "Brazil",
    "BR",
    2101471,
    8515767,
    32872,
    <Typography>click</Typography>
  ),
];

const HomeTable = () => {
  //   const [page, setPage] = useState(0);
  //   const [rowsPerPage, setRowsPerPage] = useState(10);

  //   const handleChangePage = (event, newPage) => {
  //     setPage(newPage);
  //   };

  //   const handleChangeRowsPerPage = (event) => {
  //     setRowsPerPage(+event.target.value);
  //     setPage(0);
  //   };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table" o>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{
                    minWidth: {
                      xs: column.minWidth,
                      sm: column.minWidth * 1.05,
                      md: column.minWidth * 1.35,
                      lg: column.minWidth * 1.82,
                      xl: column.minWidth * 1.5,
                    },
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              //   .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default HomeTable;
