import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function StockDetails() {
  const [age, setAge] = React.useState("");

  const [formData, setFormData] = React.useState({
    name: "",
    ticker: "",
    buyPrice: 0,
    quantity: 0,
    volume: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: 500,
        margin: "auto",
      }}
    >
      <Box sx={{ my: 4, mx: "auto" }}>
        <Typography variant="h2" sx={{ color: "#fc4000" }}>
          Create Stock
        </Typography>
      </Box>
      <TextField
        label="Name"
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
      <TextField
        id="outlined-select-currency"
        select
        label="Select"
        defaultValue="EUR"
        helperText="Please select your currency"
      >
        {currencies.map((option) => (
          <>
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </>
        ))}
      </TextField>
      {/* <FormControl sx={{ m: 1, minWidth: 120 }} error>
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleAgeChange}
          renderValue={(value) => `⚠️  - ${value}`}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}

          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl> */}
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
          py: 2,
          color: "#fff",
          fontSize: "18px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}
