import { useEffect, useState } from "react";
import {
  Button,
  Stack,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Select,
  TextField,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import baseUrl from "./api.js";
import api from "./api.js";
import axios from "axios";

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
    id: "volume",
    label: "Volume",
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

const HomeTable = () => {
  const [selectedStock, setSelectedStock] = useState({});
  const [stockData, setStockData] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("");
  const [portfolioData, setPortfolioData] = useState([]);
  const [openDelete, setOpenDelete] = useState(false);

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const [stockId, setStockId] = useState();

  const handleOpenDelete = (data) => {
    setStockId(data);
    setOpenDelete(true);
  };

  const handleDeleteStock = async () => {
    try {
      await api.delete(`/stocks/${stockId}`);
      handleCloseDelete();
    } catch (error) {}
  };

  const [formData, setFormData] = useState({
    name: selectedStock.name,
    ticker: selectedStock.ticker,
    buyPrice: selectedStock.buyPrice,
    quantity: selectedStock.quantity,
    volume: selectedStock.volume,
  });

  const [open, setOpen] = useState(false);

  const handleClickOpen = (data) => {
    setSelectedStock(data);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  useEffect(() => {
    fetchAllStock();
  }, []);

  const fetchAllStock = async () => {
    try {
      const response = await baseUrl.get("/stocks/all/stock");

      setStockData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  function createData(name, ticker, quantity, volume, price, action) {
    return { name, ticker, quantity, volume, price, action };
  }

  const rows = stockData.map((data) =>
    createData(
      data.name,
      data.ticker,
      data.quantity,
      data.volume,
      data.buyPrice,
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" onClick={() => handleClickOpen(data)}>
          Edit
        </Button>
        <Button
          variant="contained"
          onClick={() => handleOpenDelete(data.id)}
          sx={{ background: "red" }}
        >
          Delete
        </Button>
      </Stack>
    )
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === "buyPrice" || name === "quantity" || name === "volume"
          ? Number(value)
          : value,
    }));
  };

  const handlePortfolioChange = (event) => {
    console.log(event.target.value);
    setSelectedPortfolio(event.target.value);
  };

  const fetchAllPortfolio = async () => {
    try {
      const response = await baseUrl.get("/portfolio/all");

      setPortfolioData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllPortfolio();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await axios.put(
        `http://localhost:8282/api/stocks/${selectedStock.id}/update`,
        {
          name: formData.name || selectedStock.name,
          ticker: formData.ticker || selectedStock.ticker,
          buyPrice: Number(formData.buyPrice) || selectedStock.buyPrice,
          quantity: Number(formData.quantity) || selectedStock.quantity,
          volume: Number(formData.volume) || selectedStock.volume,
          portfolio: { name: selectedPortfolio } || selectedStock.portfolio,
        }
      );

      console.log("updated Stock::::", response.data);
      fetchAllStock();
      fetchAllPortfolio();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper sx={{ width: "100%" }}>
      <TableContainer sx={{ maxHeight: 640 }}>
        <Table stickyHeader aria-label="sticky table" o>
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
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
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column, index) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={index} align={column.align}>
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

      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle sx={{ textAlign: "center" }}>Edit Stock</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            // onSubmit={handleSubmit}
            sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}
          >
            <TextField
              label="Stock Name"
              name="name"
              value={formData.name}
              defaultValue={selectedStock.name}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Ticker"
              name="ticker"
              value={formData.ticker}
              defaultValue={selectedStock.ticker || ""}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Buy Price"
              name="buyPrice"
              type="number"
              value={formData.buyPrice}
              defaultValue={selectedStock.buyPrice || ""}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
            <TextField
              label="Quantity"
              name="quantity"
              type="number"
              value={formData.quantity}
              defaultValue={selectedStock.quantity || ""}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
            />

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Portfolio
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Portfolio"
                onChange={handlePortfolioChange}
                // renderValue={(value) => value}
                value={selectedPortfolio || ""}
              >
                {portfolioData.map((option) => (
                  <MenuItem key={option.id} value={option.name}>
                    {option.name}
                  </MenuItem>
                ))}

                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Volume"
              name="volume"
              value={formData.volume}
              defaultValue={selectedStock.volume || ""}
              onChange={handleInputChange}
              variant="outlined"
              fullWidth
              required
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            type="submit"
            variant="contained"
            // fullWidth
            sx={{
              background: "#fc4000",
              my: 2,
              py: 1,
              color: "#fff",
              fontSize: "12px",
              mr: 8,
            }}
            onClick={handleSubmit}
          >
            {/* {isEditable ? "Enable Edit" : "Update Stock"} */}Update Stock
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        disableEscapeKeyDown
        open={openDelete}
        onClose={handleCloseDelete}
      >
        <DialogTitle
          sx={{ cursor: "pointer", textAlign: "right" }}
          onClick={handleCloseDelete}
        >
          X
        </DialogTitle>
        <DialogContent sx={{ textAlign: "center" }}>
          Are you you want to delete this stock?
        </DialogContent>

        <DialogActions>
          <Button
            sx={{
              background: "red",
              color: "#fff",
              textTransform: "capitalize",
            }}
            onClick={handleDeleteStock}
          >
            Delete Stock
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default HomeTable;
