import { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import MainLayout from "../shared/layouts/MainLayout";
import StoreProvider from "../storage/StoreProvider";

import "@styles/globals.css";



function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => <MainLayout>{page}</MainLayout>);

  return (
    <StoreProvider>
      {getLayout(<Component {...pageProps} />)}
    </StoreProvider>
  );
}

export default appWithTranslation(App);

