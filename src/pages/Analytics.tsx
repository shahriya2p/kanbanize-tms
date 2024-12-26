import React from 'react';
import { Typography, Box } from '@mui/material';
import AnalyticsChart from '../components/AnalyticsChart/index.js';

const AnalyticsPage: React.FC = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <AnalyticsChart />
    </Box>
  );
};

export default AnalyticsPage;
