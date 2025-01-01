import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid2,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import TaskIcon from "@mui/icons-material/Task";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { KANBANIZE } from "../../resources/data.json";

const SideBar: React.FC = () => {
  const menuItems = [
    { text: "Kanban Board", icon: <DashboardIcon />, path: "/kanban" },
    { text: "Analytics", icon: <BarChartIcon />, path: "/analytics" },
    { text: "Task List", icon: <TaskIcon />, path: "/task-list" },
    { text: "Profile", icon: <AccountCircle />, path: "/profile" },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
        },
      }}
    >
      <Box sx={{ padding: 2 }}>
        <Grid2
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Grid2 size={6}>
            <img
              src="/src/assets/kanbanizeFavicon.png"
              height={60}
              alt="Kanbanize"
            />
          </Grid2>
          <Grid2 size={6}>
            <Typography
              variant="h5"
              sx={{
                background: "#0055CC",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: "bold",
              }}
            >
              {KANBANIZE}
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            key={item.text}
            component={NavLink}
            to={item.path}
            sx={{
              "&.active": {
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default SideBar;
