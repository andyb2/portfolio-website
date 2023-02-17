import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ViewportHeight from './hooks/ViewportHeight';

function App() {
  const [height, setHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ViewportHeight height={height} setHeight={setHeight} />
      <Home height={height} />
      <Projects height={height} />
    </ThemeProvider>
  );
}

export default App;
