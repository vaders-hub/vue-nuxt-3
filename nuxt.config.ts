// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  build: {},
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore']],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      // baseURL: process.env.BASE_URL || "https://localhost:3001/",
    },
  },
  routeRules: {},
  srcDir: 'src/',
  typescript: {
    shim: false,
    typeCheck: true,
  },
});
