import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Layout from "./components/Layout";
import { darkTheme, lightTheme } from "./utils/theme";
import { ToastContainer } from "react-toastify";
import Router from "./Router";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout darkMode={darkMode} handleThemeChange={handleThemeChange}>
        <ToastContainer />
        <Router />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
