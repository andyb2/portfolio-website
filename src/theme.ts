import { createTheme } from "@mui/material/styles";
import { lineHeight } from "@mui/system";

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Titillium Web',
          color: '#c3ca86',
          padding: '0',
          margin: '0',
        },
      },
    },
  }
});