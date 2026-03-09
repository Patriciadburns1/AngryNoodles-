import { createTheme } from '@mui/material/styles';

const blush = '#e8b4b8';
const navy = '#152a47';
const lightBlush = '#fdf0f2';
const warmWhite = '#fff8f0';

export const theme = createTheme({
  palette: {
    primary: {
      main: navy,
      light: '#1e3a5f',
      dark: '#0d1f35',
      contrastText: warmWhite,
    },
    secondary: {
      main: blush,
      light: lightBlush,
      contrastText: warmWhite,
    },
    background: {
      default: lightBlush,
      paper: '#ffffff',
    },
    text: {
      primary: navy,
      secondary: '#4a5568',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        contained: {
          color: warmWhite,
          '&:hover': {
            backgroundColor: '#0d1f35',
            color: warmWhite,
          },
        },
        containedSecondary: {
          color: warmWhite,
          '&:hover': {
            color: warmWhite,
          },
        },
      },
    },
  },
});
