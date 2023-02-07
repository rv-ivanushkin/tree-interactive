import { initReactI18next } from 'react-i18next'
import i18next from 'i18next'

import ru from './locale/ru.json'
import en from './locale/en.json'

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      ru: {
        translation: ru,
      },
      en: {
        translation: en,
      },
    },
    lng: 'ru',
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  })
