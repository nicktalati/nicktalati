import React from 'react';
import { Typography, Box } from '@mui/material';

function Metrics() {
  return (
    <Box sx={{ p: 3 }}> {/* Provides padding around your content */}
      <Typography variant="h4" gutterBottom>
        Metrics
      </Typography>
      <Typography variant="subtitle1">
        Explore comprehensive insights and trends to understand your application's performance and user engagement.
      </Typography>
    </Box>
  );
}

export default Metrics;
