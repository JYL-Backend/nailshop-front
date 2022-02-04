import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Home from './index';
import HomeLayout from '../layout/HomeLayout';
import { RecoilRoot } from 'recoil';
import { createMuiTheme, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { purple, yellow } from '@mui/material/colors';
import { YELLOW_COLOR } from '../common/colors/ButtonColors';
import { CUSTOM_PALETTE } from '../common/colors/CustomPalette';
import { SnackbarProvider } from 'notistack';
import SnackbarHelper from '../common/SnackbarHelper';

function MyApp({ Component, pageProps }: any) {
  const theme = createTheme(CUSTOM_PALETTE);
  const Layout = Component.Layout || HomeLayout;
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <SnackbarProvider maxSnack={5}>
          <SnackbarHelper />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

declare module '@mui/material/styles' {
  interface PaletteOptions {
    yellow: any;
    gray: any;
    jamong: any;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    yellow: true;
    gray: true;
    jamong: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
    yellow: true;
    gray: true;
    jamong: true;
  }
}

export default MyApp;
