import { useEffect, useState } from "react";
import { Box, Avatar, Typography, Paper, Container, Grid } from "@mui/material";
import {
  PROFILE_ERROR,
  ROLE,
  EMAIL,
  TEAM,
  PROJECT_ASSIGNED,
  KANBANIZE_BOARD,
  DEVELOPMENT_TEAM,
} from "../resources/data.json";

const dummyUsers = [
  {
    id: 1,
    name: "Viresh Mistry",
    email: "viresh.m@example.com",
    color: "#FF5733",
    role: "Project Manager",
  },
  {
    id: 2,
    name: "Amit Desai",
    email: "amit.d@example.com",
    color: "#33B5FF",
    role: "Developer",
  },
  {
    id: 3,
    name: "Ankit Mehta",
    email: "ankit.m@example.com",
    color: "#FF33D4",
    role: "QA Tester",
  },
  {
    id: 4,
    name: "Arjun Patel",
    email: "arjun.p@example.com",
    color: "#33FF57",
    role: "UI/UX Designer",
  },
  {
    id: 5,
    name: "John Doe",
    email: "john.d@example.com",
    color: "#FFC300",
    role: "Team Lead",
  },
];

const ProfilePage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loginID = localStorage.getItem("loginID");
    if (loginID) {
      const loggedInUser = dummyUsers.find(
        (user) => user.id === parseInt(loginID)
      );
      setUser(loggedInUser);
    }
  }, []);

  if (!user) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Typography variant="h6" color="error">
          {PROFILE_ERROR}
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        pt: 4,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          width: "100%",
          textAlign: "center",
          backdropFilter: "blur(5px)",
          backgroundColor: "rgba(255, 255, 255, 0.85)",
          borderRadius: "10px",
        }}
      >
        <Avatar
          sx={{
            bgcolor: user.color,
            width: 80,
            height: 80,
            margin: "0 auto",
            fontSize: "2rem",
            mb: 2,
          }}
        >
          {user.name[0]}
        </Avatar>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          {user.name}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: "#555" }}>
          {ROLE}: {user.role}
        </Typography>
        <Box sx={{ textAlign: "left", width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">
                {EMAIL}:
              </Typography>
              <Typography variant="body1">{user.email}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">
                {TEAM}:
              </Typography>
              <Typography variant="body1">{DEVELOPMENT_TEAM}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">
                {PROJECT_ASSIGNED}:
              </Typography>
              <Typography variant="body1">{KANBANIZE_BOARD}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default ProfilePage;
