import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import MainLayout from "../shared/layouts/MainLayout";
import StoreProvider from "../storage/StoreProvider";

import "@styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </StoreProvider>
  );
}

export default appWithTranslation(App);

