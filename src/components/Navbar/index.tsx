import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

const NavBar: React.FC<{
  darkMode: boolean;
  handleThemeChange: () => void;
  onLogout?: () => void;
  loginPage?: boolean;
}> = ({ darkMode, handleThemeChange, onLogout, loginPage }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };
  if (loginPage) {
    return (
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ ml: 95 }}>
            Task Management System
          </Typography>
          <IconButton
            sx={{ ml: 46 }}
            onClick={handleThemeChange}
            color="inherit"
            aria-label="toggle theme"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    );
  }

  const drawer = (
    <Box sx={{ width: 180 }}>
      <List>
        <ListItem>
          <IconButton
            onClick={handleDrawerToggle}
            sx={{ marginLeft: "auto" }}
            aria-label="close"
          >
            <CloseIcon sx={{ fontSize: 32 }} />
          </IconButton>
        </ListItem>
        <ListItem component={NavLink} to="/create-task">
          <ListItemText primary="Add New Task" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, display: { sm: "none" } }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginLeft: "240px" }}
          >
            Task Management System
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            to="/create-task"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              <AddIcon sx={{ fontSize: 22 }} /> Add a New Task
            </div>
          </Button>
          <IconButton
            sx={{ ml: 1 }}
            onClick={handleThemeChange}
            color="inherit"
            aria-label="toggle theme"
          >
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          <Button color="secondary" onClick={onLogout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </>
  );
};

export default NavBar;
