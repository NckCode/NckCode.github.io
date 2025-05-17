import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1e90ff', // Dodger Blue
    },
    secondary: {
      main: '#000000', // Black (used in gradient)
    },
    background: {
      default: '#f5f7fa',
      paper: 'rgba(255, 255, 255, 0.7)', // Transparent white
    },
    text: {
      primary: '#000000', // for light theme
      secondary: '#555555',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(255, 255, 255, 0.6)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1e90ff',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#121212',
      paper: 'rgba(30, 30, 30, 0.7)', // Transparent dark
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 15, 15, 0.7)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});
