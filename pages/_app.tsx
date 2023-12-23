import React from "react";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";

import MainLayout from "../shared/layouts/MainLayout";
import StoreProvider from "../storage/StoreProvider";

import "@styles/globals.css";

type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: React.ReactElement) => <MainLayout>{page}</MainLayout>);

  return (
    <StoreProvider>{getLayout(<Component {...pageProps} />)}</StoreProvider>
  );
}

export default appWithTranslation(App);
