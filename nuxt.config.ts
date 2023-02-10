// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=100, initial-scale=1',
      title: 'vue-nuxt-3',
      meta: [{ name: 'description', content: 'My amazing site.' }],
    },
  },
  build: {},
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://localhost:6443',
        changeOrigin: true,
        prependPath: true,
      },
    },
  },
  vite: {
    server: {
      hmr: {
        clientPort: 24678,
        port: 24678,
      },
      watch: {
        usePolling: true,
      },
    },
  },
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
      API_URL_COFFEE: process.env.API_URL_COFFEE,
    },
  },
  routeRules: {},
  srcDir: 'src/',
  typescript: {
    shim: false,
    // typeCheck: true,
  },
});
