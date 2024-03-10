import React from 'react';
import Home from './components/Home';
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Home />
    </ThemeProvider>
  );
}

export default App;
