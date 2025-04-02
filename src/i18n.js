import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

fetch("/locales/en.json")
  .then(response => response.json())
  .then(en => {
    fetch("/locales/hi.json")
      .then(response => response.json())
      .then(hi => {
        i18n
          .use(LanguageDetector)
          .use(initReactI18next)
          .init({
            resources: {
              en: { translation: en },
              hi: { translation: hi }
            },
            fallbackLng: "en",
            interpolation: { escapeValue: false }
          });
      });
  });

export default i18n;
