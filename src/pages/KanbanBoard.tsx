import React from "react";
import { Typography, Box } from "@mui/material";
import KanbanBoard from "../components/KanbanBoard";
import { KANBAN_BOARD } from "../resources/data.json";

const KanbanBoardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {KANBAN_BOARD}
      </Typography>
      <KanbanBoard />
    </Box>
  );
};

export default KanbanBoardPage;
