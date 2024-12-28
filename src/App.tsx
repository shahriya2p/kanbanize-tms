import { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import KanbanBoard from './pages/KanbanBoard';
import Analytics from './pages/Analytics';
import { darkTheme, lightTheme } from './utils/theme';
import { ToastContainer } from 'react-toastify';
import TaskTable from './components/Task/TaskTable';
import TaskForm from './components/Task/TaskForm';

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
          <Routes>
            <Route path="/kanban" element={<KanbanBoard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/task-list" element={<TaskTable />} />
            <Route path="/create-task" element={<TaskForm />} />
          </Routes>
        </Layout>
    </ThemeProvider>
  );
}

export default App;
