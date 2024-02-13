import Dashboard from "./components/Dashboard";
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
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
