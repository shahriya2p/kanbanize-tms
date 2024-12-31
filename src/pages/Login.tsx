import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Grid2,
} from "@mui/material";

const dummyUsers = [
  {
    id: 1,
    name: "Viresh Mistry",
    password: "password123",
    color: "#FF5733",
  },
  { id: 2, name: "Amit Desai", password: "password123", color: "#33B5FF" },
  { id: 3, name: "Ankit Mehta", password: "password123", color: "#FF33D4" },
  { id: 4, name: "Arjun Patel", password: "password123", color: "#33FF57" },
  { id: 5, name: "John Doe", password: "password123", color: "#FFC300" },
];

const LoginPage = ({ onLogin }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = dummyUsers.find(
      (user) => user.name.toLowerCase() === username.toLowerCase()
    );
    if (user && user.password === password) {
      onLogin(user.id);
      alert(`Welcome, ${user.name}!`);
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage:
          "url('https://source.unsplash.com/1600x900/?productivity,office')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          </Grid2>
          <Typography
            variant="h5"
            sx={{ mt: 2, mb: 4, fontWeight: "bold", color: "#0055CC" }}
          >
            Login to Kanbanize Board
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, mb: 3, color: "#666", fontStyle: "italic" }}
          >
            Organize your tasks efficiently
          </Typography>
          <TextField
            label="Username"
            fullWidth
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ mb: 2 }}
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mb: 2 }}>
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleLogin}
            sx={{
              py: 1.5,
              fontSize: "1rem",
              fontWeight: "bold",
              mt: 2,
            }}
          >
            Login
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoginPage;
