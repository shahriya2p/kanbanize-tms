import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Box
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  CREATE_TASK,
  RESET,
  SUBMIT_TASK,
  CANCEL,
} from "../../resources/data.json";

const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('New Task:', { taskName, taskDescription, dueDate });
    navigate("/task-list");
  };

  return (
    <Box sx={{ padding: 2 }}>
      <Button
        type="button"
        variant="text"
        color="inherit"
        onClick={() => {
          navigate("/kanban");
        }}
      >
        {"< back"}
      </Button>
      <Typography variant="h4" gutterBottom>
        {CREATE_TASK}
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
        <Box sx={{ textAlign: "center", marginTop: 10, gap: "8px " }}>
          <Button
            type="button"
            variant="contained"
            onClick={() => navigate("/")}
          >
            {CANCEL}
          </Button>
          <Button
            style={{ marginLeft: 25 }}
            type="reset"
            variant="contained"
            color="info"
            onClick={() => {
              setTaskName("");
              setTaskDescription("");
              setDueDate("");
            }}
          >
            {RESET}
          </Button>
          <Button
            style={{ marginLeft: 25 }}
            type="submit"
            variant="contained"
            color="success"
          >
            {SUBMIT_TASK}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default TaskForm;
