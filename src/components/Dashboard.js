import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import React, { useState } from 'react';
import Metrics from './metrics/Metrics';
import Sentiment from './metrics/Sentiment';
import Engagement from './metrics/Engagement';
import Coverage from './metrics/Coverage';
import Reviews from './Reviews';
import Suggestions from './Suggestions';


const drawerWidth = 200; // Adjust based on your preference

function Dashboard() {
    const [selectedIndex, setSelectedIndex] = useState('');

    const handleMenuItemClick = (index) => {
        setSelectedIndex(index);
    };

    const renderContent = () => {
        switch (selectedIndex) {
          case 'metrics':
            return <Metrics />;
        case 'sentiment':
            return <Sentiment />;
            case 'engagement':
            return <Engagement />;
            case 'coverage':
            return <Coverage />;

          case 'reviews':
            return <Reviews />;
          case 'suggestions':
            return <Suggestions />;
          default:
            return <div>Select a menu item to view its content.</div>;
        }
      };

    return (
        <Box sx={{ display: 'flex' }}>

        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    Nectar ACAT
                </Typography>
            </Toolbar>
        </AppBar>

        <Drawer
            variant="permanent"
            sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar /> {/* This empty Toolbar component is used to offset the content below the AppBar */}
            <Box sx={{ overflow: 'auto' }}>
            <List>
            <ListItemButton
              selected={selectedIndex === 'metrics'}
              onClick={() => handleMenuItemClick('metrics')}
            >
              <ListItemText primary="Metrics" />
            </ListItemButton >
            {/* Sub-Menu for Metrics */}
                <List component="div" disablePadding>
                    <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 'sentiment'}
                        onClick={() => handleMenuItemClick('sentiment')}
                    >
                        <ListItemText primary="Sentiment" />
                    </ListItemButton>
                    <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 'engagement'}
                        onClick={() => handleMenuItemClick('engagement')}
                    >
                        <ListItemText primary="Engagement" />
                    </ListItemButton>
                    <ListItemButton
                        sx={{ pl: 4 }}
                        selected={selectedIndex === 'coverage'}
                        onClick={() => handleMenuItemClick('coverage')}
                    >
                        <ListItemText primary="Coverage" />
                    </ListItemButton>
                    </List>

                    {/* Reviews Menu */}
                    <ListItemButton
                    selected={selectedIndex === 'reviews'}
                    onClick={() => handleMenuItemClick('reviews')}
                    >
                    <ListItemText primary="Reviews" />
                    </ListItemButton>

                    {/* Suggestions Menu */}
                    <ListItemButton
                    selected={selectedIndex === 'suggestions'}
                    onClick={() => handleMenuItemClick('suggestions')}
                    >
                    <ListItemText primary="Suggestions" />
                    </ListItemButton>
                </List>
            </Box>
        </Drawer>
        <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, marginTop: 8 }}
      >
        {renderContent()}
      </Box>
    </Box>
  );
}

export default Dashboard;