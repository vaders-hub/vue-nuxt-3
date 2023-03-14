import { defineNuxtConfig } from 'nuxt/config';
import { createResolver } from '@nuxt/kit';
import vuetify from 'vite-plugin-vuetify';

const { resolve } = createResolver(import.meta.url);
// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=100, initial-scale=1',
      title: 'vue-nuxt-3',
      meta: [{ name: 'description', content: 'default' }],
    },
  },
  build: {
    transpile: [/@vueuse\/nuxt/, 'vuetify'],
  },
  css: ['vuetify/styles'],
  imports: {
    dirs: ['stores'],
  },
  nitro: {
    devProxy: {
      '/api': {
        target: 'https://localhost:6443',
        changeOrigin: true,
        prependPath: true,
        secure: false,
      },
    },
  },
  vite: {
    server: {
      hmr: {
        port: -'24678:24678',
        protocol: 'ws',
      },
      watch: {
        usePolling: true,
      },
    },
    define: {
      'process.env.DEBUG': false,
    },
    ssr: {
      noExternal: ['vuetify'],
    },
  },
  modules: [
    '@vite-pwa/nuxt',
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', ['defineStore', 'definePiniaStore'], 'acceptHMRUpdate'],
      },
    ],
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config => {
        config.plugins!.push(vuetify());
      });
    },
  ],
  plugins: ['./src/plugins/sw.client.js'],
  pwa: {
    workbox: {
      navigateFallback: '/',
    },
  },
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
