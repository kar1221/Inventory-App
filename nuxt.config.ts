// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@prisma/nuxt',
    '@pinia/nuxt',
    '@nuxt/eslint'
  ],
  css: ['~/assets/css/tailwind.css'],
  tailwindcss: {
    config: {
      theme: {
        colors: {
          meow: '#123123'
        }
      }
    }
  },
  prisma: {
    autoSetupPrisma: true
  }
});
