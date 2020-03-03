import i18n from "i18next";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en.json";
import translationFr from "./locales/fr.json";

i18n.use(XHR).init({
  debug: true,
  lng: "fr",
  fallbackLng: "fr", // use en if detected lng is not available

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false // react already safes from xss
  },

  resources: {
    en: {
      translations: translationEn
    },
    fr: {
      translations: translationFr
    }
  },
  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations"
});

export default i18n;
