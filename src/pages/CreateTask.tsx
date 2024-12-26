import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Notification from '../components/Notification';

const CreateTask: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleCreateTask = () => {
    console.log('Task Created:', taskTitle);
    setNotification(`Task "${taskTitle}" is due on ${dueDate}`);
    navigate('/');
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4">Create New Task</Typography>
      <TextField
        label="Task Title"
        variant="outlined"
        fullWidth
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Due Date"
        variant="outlined"
        fullWidth
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleCreateTask}>
        Create Task
      </Button>
      <Notification message={notification} severity={"success"}/>
    </Box>
  );
};

export default CreateTask;
