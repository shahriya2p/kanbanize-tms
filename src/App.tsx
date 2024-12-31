import { useEffect, useState } from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { darkTheme, lightTheme } from "./utils/theme";
import { ToastContainer } from "react-toastify";
import Router from "./Router";
import LoginPage from "./pages/Login";
import { useNavigate } from "react-router-dom";
import NavBar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginID = localStorage.getItem("loginID");
    setIsLoggedIn(!!loginID); // Set to true if loginID exists
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
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box>
        <NavBar
          darkMode={darkMode}
          handleThemeChange={handleThemeChange}
          loginPage={true}
        />
        <LoginPage onLogin={handleLogin} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
