import i18next from "i18next";
import { initReactI18next } from "react-i18next";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: require("./locales/en.json") },
    de: { translation: require("./locales/de.json") },
    ar: { translation: require("./locales/ar.json") },
    tur: { translation: require("./locales/tur.json") },
  },
  lng: localStorage.getItem("lang") || "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18next;
