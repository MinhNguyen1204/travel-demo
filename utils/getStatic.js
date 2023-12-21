import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import i18nextConfig from "../next-i18next.config";

import { SEO_CONFIG } from "./constants";

export const getI18nPaths = () =>
  i18nextConfig.i18n.locales.map((lng) => ({
    params: {
      locale: lng,
    },
  }));

export const getStaticPaths = () => ({
  fallback: false,
  paths: getI18nPaths(),
});

export async function getI18nProps(ctx) {
  const locale = ctx?.params?.locale || "en";
  let props = {
    ...(await serverSideTranslations(locale)),
  };
  return props;
}

export function makeStaticProps() {
  return async function getStaticProps(ctx) {
    return {
      props: await getI18nProps(ctx),
    };
  };
}

