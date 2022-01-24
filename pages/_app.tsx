import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Home from "./index";
import HomeLayout from "../layout/HomeLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <HomeLayout>
        <Component {...pageProps} />
      </HomeLayout>
  )
}

export default MyApp
