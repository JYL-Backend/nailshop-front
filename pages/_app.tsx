import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Home from './index';
import HomeLayout from '../layout/HomeLayout';
import { RecoilRoot } from 'recoil';
import { createMuiTheme, createTheme, ThemeProvider } from '@mui/material';
import { purple, yellow } from '@mui/material/colors';
import { YELLOW_COLOR } from '../common/colors/ButtonColors';
import { CUSTOM_PALETTE } from '../common/colors/CustomPalette';
import { SnackbarProvider } from 'notistack';
import SnackbarHelper from '../common/SnackbarHelper';

function MyApp({ Component, pageProps }: AppProps) {
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

export default MyApp;
