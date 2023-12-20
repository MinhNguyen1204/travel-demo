import type { AppProps } from "next/app";

import StoreProvider from "../storage/StoreProvider";

import "@styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {

  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
}

