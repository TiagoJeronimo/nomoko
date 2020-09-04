import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import backend from 'i18next-xhr-backend';

i18n
  .use(initReactI18next)
  .use(backend)
  .init({
    fallbackLng: ['en', 'de'],
    debug: true,
    defaultNS: 'houseSearch',
    whitelist: ['en', 'de'],
    lng: 'en',
    ns: 'houseSearch',
    load: 'currentOnly',
    interpolation: {
      escapeValue: false, // not needed for react
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
