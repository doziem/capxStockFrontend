import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Dashboard from "./Dashboard";
import Grid from "@mui/material/Grid2";
import HomeTable from "./HomeTable";
import { useNavigate } from "react-router-dom";

const drawerWidth = 220;
const navItems = ["Home", "About", "Contact"];

const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
    console.log(props);
  };

  const handleClick = (item) => {
    console.log(item);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "right" }}>
      <ArrowBackIosIcon sx={{ m: 2 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{}}>
              <Button
                variant="contained"
                sx={{ background: "red" }}
                onClick={() => navigation(`${item}`)}
              >
                <ListItemText
                  primary={item}
                  //   onClick={() => }
                />
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "#fff" }}>
        <Toolbar>
          <IconButton
            color="#000"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            color="#000"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CapX
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: "#000" }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Grid container spacing={4}>
          <Grid size={12}>
            <Dashboard />
          </Grid>
          <Grid size={12}>
            <HomeTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

Home.propTypes = {
  window: PropTypes.func,
};
export default Home;
