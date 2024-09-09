// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@prisma/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/tailwind.css'],
  prisma: {
    autoSetupPrisma: true
  },
  googleFonts: {
    families: {
      Poppins: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    },
    display: 'swap'
  }
});
