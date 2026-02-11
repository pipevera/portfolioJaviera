// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  devServer: {
    host: "0.0.0.0",
    port: 3000,
  },

  googleFonts: {
    families: {
      'Wix+Madefor+Text': [100, 200, 300, 400, 500, 600, 700, 800, 900],
      'Yellowtail': [400],
      preload: false,
      preconnect: false,
      download: true,
      base64: false,
    },
  },

  modules: ['@nuxtjs/google-fonts', '@nuxtjs/tailwindcss'],
})