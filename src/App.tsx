import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ViewportHeight from './hooks/ViewportHeight';
import Nav from './components/Nav';
import Tech from './pages/Tech';
import styled from '@emotion/styled';

export const Animate = styled.div`
  @media (min-width: 1397px) {
    &.card:nth-of-type(2) {
      transition-delay: 100ms;
    }
    &.card:nth-of-type(3) {
      transition-delay: 200ms;
    }
    &.card:nth-of-type(4) {
      transition-delay: 300ms;
    }
  }

  &.hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 0.5s;
  }
  &.show {
    opacity: 1;
    filter: blur(0);
    transform: translateX(0);
  }
`;

function App() {
  const [height, setHeight] = useState<number>(window.innerHeight);
  const [active, setActive] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));
  }, [active]);

  useEffect(() => {
    window.history.scrollRestoration = 'manual';
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ViewportHeight height={height} setHeight={setHeight} />
      <Nav />
      <Home height={height} active={active} setActive={setActive} />
      <Tech height={height} />
      <Projects height={height} />
    </ThemeProvider>
  );
}

export default App;
