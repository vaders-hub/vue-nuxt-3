export default defineNuxtConfig({
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
      },
    ],
  ],
  runtimeConfig: {},
  srcDir: "src/",
  typescript: {
    shim: false,
  },
});
