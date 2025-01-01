import React from "react";
import { Typography, Box } from "@mui/material";
import TaskList from "../components/Task/TaskList";
import { TASK_LIST } from "../resources/data.json";

const TaskListPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {TASK_LIST}
      </Typography>
      <TaskList />
    </Box>
  );
};

export default TaskListPage;
