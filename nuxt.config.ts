export default defineNuxtConfig({
  compatibilityDate: '2026-01-01',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  runtimeConfig: {
    public: {
      newsApiKey: '',
    },
  },
})
