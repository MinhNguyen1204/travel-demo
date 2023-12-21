import { useEffect } from "react";
import { useRouter } from "next/router";

import nextI18nextConfig from "../next-i18next.config";

import languageDetector from "./languageDetector";

export const useRedirect = (to) => {
  const router = useRouter();

  // language detection
  useEffect(() => {
    let detectedLng = languageDetector.detect() || "en";
    if (!nextI18nextConfig.i18n.locales.includes(detectedLng)) {
      detectedLng = nextI18nextConfig.i18n.defaultLocale;
    }
    languageDetector.cache(detectedLng);
    router.replace("/" + detectedLng);
  });

  return <></>;
};

export const Redirect = () => {
  useRedirect();
  return <></>;
};

