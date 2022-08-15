import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './components/Home';
import Projects from './components/Projects';
import ViewportHeight from './components/ViewportHeight';
import './App.css';


function App() {
  const [height, setHeight] = useState<number>(window.innerHeight);
  return (
    <ThemeProvider theme={theme}>
          <ViewportHeight height={height} setHeight={setHeight}/>
          <Home height={height} />
          <Projects height={height} />
    </ ThemeProvider>
  );
}

export default App;
