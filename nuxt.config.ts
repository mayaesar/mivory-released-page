// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n', '@nuxtjs/seo',],
  css: ['~/assets/css/main.css'],
  ui: {
    colorMode: false
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [{
      code: 'en',
      name: 'English'
    }, {
      code: 'fr',
      name: 'Français'
    }]
  },
  site: {
    url: 'https://mivory.app',
    name: 'Mivory - Your Second Memory'
  },
})
