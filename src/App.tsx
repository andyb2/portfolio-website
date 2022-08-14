import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './components/Home';
import Projects from './components/Projects';
import ViewportHeight from './components/ViewportHeight';
import './App.css';


function App() {
  console.log(window.innerHeight);
  return (
    <ThemeProvider theme={theme}>
          <ViewportHeight />
          <Home />
          <Projects />
    </ ThemeProvider>
  );
}

export default App;
