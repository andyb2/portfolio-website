import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './components/Home';
import Projects from './components/Projects';

function App() {
  return (
    <ThemeProvider theme={theme}>
          <Home />
          <Projects />
    </ ThemeProvider>
  );
}

export default App;
