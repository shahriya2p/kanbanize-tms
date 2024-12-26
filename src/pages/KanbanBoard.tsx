import React from 'react';
import { Typography, Box } from '@mui/material';
import KanbanBoard from '../components/KanbanBoard';

const KanbanBoardPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>
      <KanbanBoard />
    </Box>
  );
};

export default KanbanBoardPage;
