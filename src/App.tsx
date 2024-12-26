import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import KanbanBoard from './pages/KanbanBoard';
import Analytics from './pages/Analytics';
import { darkTheme, lightTheme } from './utils/theme';
import Notification from './components/Notification';
import { ToastContainer } from 'react-toastify';
import TaskTable from './components/Task/TaskTable';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <Layout darkMode={darkMode} handleThemeChange={handleThemeChange}>
        <Notification message='Welcome Back' severity='info' />
  			<ToastContainer />
          <Routes>
            <Route path="/task-list" element={<TaskTable />} />
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
