import { createI18n } from 'vue-i18n'
import en from './locales/en'
import km from './locales/km'
import zh from './locales/zh'

const savedLocale = typeof localStorage !== 'undefined' ? localStorage.getItem('locale') : null

export const availableLocales = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'km', label: 'ភាសាខ្មែរ', flag: '🇰🇭' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
]

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: savedLocale || 'en',
  fallbackLocale: 'en',
  messages: { en, km, zh },
})

export function setLocale(code) {
  i18n.global.locale.value = code
  if (typeof localStorage !== 'undefined') localStorage.setItem('locale', code)
  if (typeof document !== 'undefined') document.documentElement.setAttribute('lang', code)
}

if (typeof document !== 'undefined') {
  document.documentElement.setAttribute('lang', i18n.global.locale.value)
}
