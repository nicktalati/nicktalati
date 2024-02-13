import React from 'react';
import { Typography, Box } from '@mui/material';
import Chart from '../Chart';

function Sentiment() {
    return (
        <Box sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            Sentiment
          </Typography>
            <Chart />
          
        </Box>
      );
    
}

export default Sentiment;