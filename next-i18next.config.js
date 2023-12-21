/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  i18n: {
    defaultLocale: "jp",
    locales: ["en", "jp"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "public/locales",
  ns: ["header", "common", "home", "footer"],
  reloadOnPrerender: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development",
};
