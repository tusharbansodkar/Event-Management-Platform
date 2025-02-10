import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  CssBaseline,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check screen size (Mobile vs Desktop)
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Sidebar Content
  const drawer = (
    <Box>
      <Box sx={{ p: 2, bgcolor: "primary.light", color: "white" }}>
        <Typography variant="h6">Event Manager</Typography>
      </Box>
      <List>
        <ListItem button onClick={() => navigate("/")}>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate("/my-events")}>
          <ListItemText primary="My Events" />
        </ListItem>
        <ListItem button onClick={() => navigate("/create-event")}>
          <ListItemText primary="Create Event" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Top Navbar */}

      {/* Sidebar Navigation */}
      {isMobile ? (
        <>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ m: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
              [`& .MuiDrawer-paper`]: {
                width: drawerWidth,
                boxSizing: "border-box",
              },
            }}
          >
            {drawer}
          </Drawer>
        </>
      ) : (
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              mt: "64px",
            }, // Push below navbar
          }}
        >
          {drawer}
        </Drawer>
      )}

      {/* Main Content */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, ml: isMobile ? 0 : `${drawerWidth}px`, mt: 8 }}
      >
        <Typography variant="h5">Dashboard</Typography>
        <Typography variant="body1">Manage your events here.</Typography>
      </Box>
    </Box>
  );
};

export default Dashboard;
