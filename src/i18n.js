// Fayl nomi: i18n.js yoki i18n.jsx

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Tarjimalarni import qilamiz
import translationUz from "./locales/uz/translation.json";
import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";

// Tarjimalarni i18n resurslarga qo‘shamiz
const resources = {
    uz: {
        translation: translationUz
    },
    en: {
        translation: translationEn
    },
    ru: {
        translation: translationRu
    }
};

// i18n ni sozlaymiz
i18n
    .use(initReactI18next) // react bilan ishlashi uchun
    .init({
        resources,
        lng: "uz", // boshlang‘ich til
        fallbackLng: "uz", // noto‘g‘ri til bo‘lsa avtomatik shu til bo‘ladi
        interpolation: {
            escapeValue: false // react uchun escape qilish shart emas
        }
    });

export default i18n;
