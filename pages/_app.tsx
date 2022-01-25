import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from "./index";
import HomeLayout from "../layout/HomeLayout";
import {RecoilRoot} from "recoil";
import {createMuiTheme, createTheme, ThemeProvider} from "@mui/material";
import {purple, yellow} from "@mui/material/colors";
import {YELLOW_COLOR} from "../colors/ButtonColors";
import {CUSTOM_PALETTE} from "../colors/CustomPalette";

function MyApp({ Component, pageProps }: AppProps) {
    const theme = createTheme(CUSTOM_PALETTE);
    const Layout = Component.Layout || HomeLayout
  return (
      <RecoilRoot>
          <ThemeProvider theme={theme}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
          </ThemeProvider>
      </RecoilRoot>
  )
}

export default MyApp
