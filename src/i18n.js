import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import {reactI18nextModule} from 'react-i18next';

i18n
// load translation using xhr -> see /public/locales
// learn more: https://github.com/i18next/i18next-xhr-backend
    .use(Backend)
    .use(reactI18nextModule)
    .init({
        fallbackLng: 'pl',
        debug: true,

        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        react: {
            wait: true
        }
    });


export default i18n;