// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: [
    '@/assets/styles/main.scss',
    '@/assets/styles/_variables.scss',
  ],
  modules: ['@pinia/nuxt'],
  alias: {
    '@': '/src',
    assets: '/assets',
    components: '/components',
    public: '/public',
  },
});
