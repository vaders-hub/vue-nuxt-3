// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  runtimeConfig: {
    public: {
      // baseURL: process.env.BASE_URL || "https://localhost:3001/",
    },
  },
  srcDir: "src/",
  typescript: {
    shim: false,
  },
});
