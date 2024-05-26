// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "bootstrap/dist/css/bootstrap.min.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "nuxt-icon",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-primevue",
  ],
  primevue: {
    Option: {
      ripple: true,
    },
    component: {
      include: [
        "primevue/multiselect",
        "primevue/editor",
        "primevue/fileupload",
      ],
    },
    unstyled: true,
  },
  // css: [
  //   "~/assets/css/tailwind.css",
  //   "primevue/resources/themes/tailwind-light/theme.css", // Fix the path here
  // ],

  pinia: {
    storesDirs: ["./stores/**", "./custom-folder/stores/**"],
  },
  imports: {
    dirs: ["./stores"],
  },
});
