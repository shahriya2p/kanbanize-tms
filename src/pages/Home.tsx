import React from 'react';
import { Box, Typography } from '@mui/material';
import TaskList from '../components/Task/TaskList';
import AnalyticsChart from '../components/AnalyticsChart/index.js';
import KanbanBoard from '../components/KanbanBoard/index.js';

const Home: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Task List</Typography>
      <TaskList />
      <AnalyticsChart />
      <Typography variant="h4">Kanban View</Typography>
      <KanbanBoard />
    </Box>
  );
};

export default Home;
