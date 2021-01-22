import translationEN from './en.json';
import translationSWE from './sw.json';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';

// const deviceLanguage =
//   Platform.OS === 'ios'
//     ? NativeModules.SettingsManager.settings.AppleLocale ||
//       NativeModules.SettingsManager.settings.AppleLanguages[0]
//     : NativeModules.I18nManager.localeIdentifier;

// const language =
//   deviceLanguage.includes('sv') ||
//   deviceLanguage.includes('swe') ||
//   deviceLanguage.includes('SE')
//     ? 'swe'
//     : 'en';

i18n.use(initReactI18next).init({
  resources: {
    swe: {translation: translationSWE},
    en: {translation: translationEN},
  },
  lng: 'swe',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
