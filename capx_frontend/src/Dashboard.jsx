import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Button, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import api from "./api";

const Dashboard = () => {
  // const [selectedCard, setSelectedCard] = React.useState(0);
  const [portfolioMetrics, setPortfolioMetrics] = React.useState({});
  const [stockWeight, setStockWeight] = React.useState([]);

  const formatStockWeight = (data) => {
    const stockMap = new Map(Object.entries(data.stockWeights));
    let stockArr = [];
    stockMap.forEach((weight, stock) => {
      stockArr.push(`${stock}: ${weight.toFixed(2)}`);
    });
    setStockWeight(stockArr);
  };
  React.useEffect(() => {
    const fetchPortfolioMetric = async () => {
      try {
        const response = await api.get("/portfolio/portfolio-metrics");

        console.log("res:::", response.data);
        setTimeout(() => {
          setPortfolioMetrics(response.data);
        }, 3000);
        formatStockWeight(response.data);
      } catch (error) {}
    };
    fetchPortfolioMetric();
  }, []);

  const navigation = useNavigate();
  return (
    <Grid container spacing={2} marginTop={4} marginBottom={2}>
      <Grid size={12}>
        <Stack
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{ mb: 2 }}
        >
          <Typography>Stotck Portfolio Metric</Typography>
          <Button
            variant="contained"
            onClick={() => navigation("stock")}
            sx={{ background: "#fc4000", color: "#fff" }}
          >
            Stock Creation
          </Button>
        </Stack>
      </Grid>
      {/* {cards.map((card, index) => ( */}
      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
          gap: 4,
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Total Value
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {portfolioMetrics.totalValue}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Average Price
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {portfolioMetrics.averagePrice}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Total Share
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {portfolioMetrics.totalShares}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Highest Priced Stock
              </Typography>
              <Stack direction={"row"} gap={5}>
                <Typography variant="body2" color="text.secondary">
                  Stock Name
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.highestPricedStock?.name}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={6}>
                <Typography variant="body2" color="text.secondary">
                  Stock Price
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.highestPricedStock?.buyPrice}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={4}>
                <Typography variant="body2" color="text.secondary">
                  Stock Volume
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.highestPricedStock?.volume}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Lowest Priced Stock
              </Typography>
              <Stack direction={"row"} gap={5.4}>
                <Typography variant="body2" color="text.secondary">
                  Stock Name
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.lowestPricedStock?.name}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={6}>
                <Typography variant="body2" color="text.secondary">
                  Stock Price
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.lowestPricedStock?.buyPrice}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={4}>
                <Typography variant="body2" color="text.secondary">
                  Stock Volume
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics.lowestPricedStock?.volume}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Price Distribution
              </Typography>
              <Stack direction={"row"} gap={5.5}>
                <Typography variant="body2" color="text.secondary">
                  Below $50
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics?.priceDistribution?.below$50}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={4}>
                <Typography variant="body2" color="text.secondary">
                  $50 To $100
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics?.priceDistribution?.between$50And$100}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={4.3}>
                <Typography variant="body2" color="text.secondary">
                  Above $100
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {portfolioMetrics?.priceDistribution?.above$100}
                </Typography>
              </Stack>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid
        size={4}
        sx={{
          width: { xs: "340px", sm: "220px", md: "200px", lg: "280px" },
          flexWrap: "wrap",
          display: {},
        }}
        // key={index}
      >
        <Card>
          <CardActionArea
            // onClick={() => setSelectedCard(index)}
            // data-active={selectedCard === index ? "" : undefined}
            sx={{
              height: "150px",
              "&[data-active]": {
                backgroundColor: "action.selected",
                "&:hover": {
                  backgroundColor: "action.selectedHover",
                },
              },
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography variant="h5" component="div">
                Stock Weights
              </Typography>
              {stockWeight.map((stock, index) => (
                <Typography variant="body2" color="text.secondary" key={index}>
                  {stock}
                </Typography>
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      {/* ))} */}
    </Grid>
  );
};

export default Dashboard;
