import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Titillium Web',
          padding: '0',
          margin: '0',
        },
      },
    },
  },
});
