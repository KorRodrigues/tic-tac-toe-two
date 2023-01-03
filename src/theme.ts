import { Roboto } from '@next/font/google';
import { createTheme, PaletteColor } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { green } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: PaletteColor;
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    tertiary: PaletteColor;
  }
}

const { palette } = createTheme();

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#3949ab',
    },
    secondary: {
      main: '#d81b60',
    },
    tertiary: palette.augmentColor({ color: green }),
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
});

export default theme;
