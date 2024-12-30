import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const TaskForm: React.FC = () => {
    const [taskName, setTaskName] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // console.log('New Task:', { taskName, taskDescription, dueDate });
        navigate('/task-list');
    };

    return (
      <Box sx={{ padding: 2 }}>
        <Button
          type="button"
          variant="text"
          color="inherit"
          onClick={() => {
            navigate("/");
          }}
        >
          {"< back"}
        </Button>
        <Typography variant="h4" gutterBottom>
          Create a New Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Task Name"
                fullWidth
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Task Description"
                fullWidth
                value={taskDescription}
                onChange={(e) => setTaskDescription(e.target.value)}
                multiline
                rows={4}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Due Date"
                type="date"
                fullWidth
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Button type="submit" variant="contained" color="primary">
              Submit Task
            </Button>
          </Box>
        </form>
      </Box>
    );
};

export default TaskForm;
