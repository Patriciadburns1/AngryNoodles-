import { createTheme } from '@mui/material/styles';

const dustyRose = '#c9a9a6';
const sage = '#9caa88';
const lightDustyRose = '#f5e6e6';
const lightSage = '#d4dcc8';
const darkSage = '#7a8b6e';

export const theme = createTheme({
  palette: {
    primary: {
      main: sage,
      light: lightSage,
      dark: darkSage,
    },
    secondary: {
      main: dustyRose,
      light: lightDustyRose,
    },
    background: {
      default: lightDustyRose,
      paper: '#ffffff',
    },
  },
});
