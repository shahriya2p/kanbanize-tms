import { useEffect, useState } from "react";
import { CircularProgress, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { darkTheme, lightTheme } from "./utils/theme";
import { ToastContainer } from "react-toastify";
import Router from "./Router";
import LoginPage from "./pages/Login";
import { useNavigate } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loginID = localStorage.getItem("loginID");
    setIsLoggedIn(!!loginID); // Set to true if loginID exists
    if (loginID) {
      setIsLoggedIn(true);
    }
    setIsLoading(false); 
  }, []);
  const navigate = useNavigate();

  const handleLogin = (userID: string) => {
    localStorage.setItem("loginID", userID);
    setIsLoggedIn(true);
    navigate("/kanban");
  };

  const handleLogout = () => {
    localStorage.removeItem("loginID");
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }
  return isLoggedIn ? (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout
        darkMode={darkMode}
        handleThemeChange={handleThemeChange}
        onLogout={handleLogout}
      >
        <ToastContainer />
        <Router />
      </Layout>
    </ThemeProvider>
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;
