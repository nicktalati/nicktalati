import React from 'react';
import { Typography, Box } from '@mui/material';
import Chart from '../Chart';

function Coverage() {
    return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Coverage
          </Typography>
          <Chart />
        </Box>
      );
}

export default Coverage;