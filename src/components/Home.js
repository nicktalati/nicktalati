import React from 'react';
import { Typography, Box } from '@mui/material';

function Home() {
    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>Welcome to nicktalati.com</Typography>
            <Typography variant="p" gutterBottom>
                Did you know that Will Tenpas is gay?
            </Typography>
        </Box>
    );
};

export default Home;