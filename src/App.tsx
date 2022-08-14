import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './components/Home';
import Projects from './components/Projects';
import ViewportHeight from './components/ViewportHeight';


function App() {
  return (
    <ThemeProvider theme={theme}>
          <ViewportHeight />
          <Home />
          <Projects />
    </ ThemeProvider>
  );
}

export default App;
