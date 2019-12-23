import en from '../lang/en.js'
import vi from '../lang/vi.js'

export const I18N = {
  locales: [
    {
      code: 'en',
      name: 'EN',
    },
    {
      code: 'vi',
      name: 'VI',
    },
  ],
  defaultLocale: 'vi',
  routes: {
    advertisement: {
      vi: '/advertisement',
      en: '/en/blog',
    },
    'advertisement/_slug': {
      vi: '/advertisement/:slug',
      en: '/en/advertisement/:slug',
    },
  },
  vueI18n: {
    fallbackLocale: 'vi',
    messages: { en, vi },
  },
}
