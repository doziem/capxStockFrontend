import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const drawerWidth = 240;
const navItems = [
  { id: 1, name: "Home", route: "/" },
  { id: 2, name: "About", route: "/about" },
  { id: 3, name: "Contact", route: "/contact" },
];

const Layout = ({ window, children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigation = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "right" }}>
      <ArrowBackIosIcon sx={{ m: 2 }} />
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton onClick={() => navigation(`${item.route}`)}>
              <ListItemText primary={item.name} />
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
            variant="h5"
            component="div"
            color="#000"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            CapX
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item.id}
                sx={{ color: "#000" }}
                onClick={() => navigation(`${item.route}`)}
              >
                {item.name}
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
          ModalProps={{ keepMounted: true }}
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
      <Box component="main" sx={{ p: 3, width: "100%" }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
