import Layout from "./Layout";
import Dashboard from "./Dashboard";
import HomeTable from "./HomeTable";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";

const Home = () => (
  <Grid container spacing={4}>
    <Grid item xs={12}>
      <Dashboard />
    </Grid>
    <Grid item xs={12}>
      <HomeTable />
    </Grid>
  </Grid>
);

Home.propTypes = {
  window: PropTypes.func,
};
export default Home;
