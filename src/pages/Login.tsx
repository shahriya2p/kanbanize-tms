import { useEffect, useState } from "react";
import {
  Container,
  TextField,
  Button,
  Paper,
  Typography,
  Grid2,
} from "@mui/material";
import WelcomeDialog from "../components/WelcomeDialog";
import { useNavigate } from "react-router-dom";

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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    
    const loginID = localStorage.getItem("loginID");
    if(loginID){
      navigate("/kanban");
    }
  },[]);

  const handleLogin = () => {
    const user = dummyUsers.find(
      (user) => user.name.toLowerCase() === username.toLowerCase()
    );
    if (user && user.password === password) {
      setLoading(true);
      setCurrentUser(user.name);
      setDialogOpen(true);
      setTimeout(() => {
        setLoading(false);
        setTimeout(() => {
          setDialogOpen(false);
          onLogin(user.id);
        }, 3000);
      }, 2000);
    } else {
      setError("Invalid username or password.");
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Paper
        elevation={3}
        sx={{ padding: 4, width: "100%", textAlign: "center" }}
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
        <Typography variant="h5" sx={{ mt: 2, mb: 4 }}>
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
      <WelcomeDialog
        open={dialogOpen}
        userName={currentUser}
        loading={loading}
      />
    </Container>
  );
};

export default LoginPage;
