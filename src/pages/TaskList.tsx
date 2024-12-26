import React from 'react';
import { Typography, Box } from '@mui/material';
import TaskList from '../components/Task/TaskList';

const TaskListPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Task List
      </Typography>
      <TaskList />
    </Box>
  );
};

export default TaskListPage;
