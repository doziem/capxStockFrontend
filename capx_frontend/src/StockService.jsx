import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import baseUrl from "./api.js";
import { useEffect, useState } from "react";
import axios from "axios";

export default function StockService() {
  const [portfolioData, setPortfolioData] = useState([]);
  const [selectedPortfolio, setSelectedPortfolio] = useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    ticker: "",
    buyPrice: 0,
    quantity: 0,
    volume: 0,
  });

  const fetchAllPortfolio = async () => {
    try {
      const response = await baseUrl.get("/portfolio/all");

      setPortfolioData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(portfolioData);

  useEffect(() => {
    fetchAllPortfolio();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    const stock = {
      ...formData,
      buyPrice: Number(formData.buyPrice),
      quantity: Number(formData.quantity),
      volume: Number(formData.volume),
      portfolio: { name: selectedPortfolio },
    };
    console.log(stock);
    try {
      const res = await axios.post(
        "http://localhost:8282/api/stocks/add",
        stock
      );

      console.log("Stock::::", res.data);
      setFormData({
        name: "",
        ticker: "",
        buyPrice: 0,
        quantity: 0,
        volume: 0,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handlePortfolioChange = (event) => {
    setSelectedPortfolio(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 500,
        margin: "auto",
        border: "1px solid #f4f4f4",
        px: 4,
        borderRadius: "10px",
      }}
    >
      <Box sx={{ my: 4, mx: "auto" }}>
        <Typography
          variant="h2"
          sx={{ color: "#fc4000", fontSize: { xs: "20px", sm: "34px" } }}
        >
          Stock Creation
        </Typography>
      </Box>
      <TextField
        label="Stock Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Ticker"
        name="ticker"
        value={formData.ticker}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Buy Price"
        name="buyPrice"
        type="buyPrice"
        value={formData.buyPrice}
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <TextField
        label="Quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        variant="outlined"
        fullWidth
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Portfolio</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Portfolio"
          onChange={handlePortfolioChange}
          renderValue={(value) => value}
          value={selectedPortfolio}
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
        onChange={handleChange}
        variant="outlined"
        fullWidth
        required
      />
      <Button
        type="submit"
        variant="contained"
        fullWidth
        sx={{
          background: "#fc4000",
          my: 2,
          py: 1,
          color: "#fff",
          fontSize: "14px",
        }}
      >
        Create Stock
      </Button>
    </Box>
  );
}
