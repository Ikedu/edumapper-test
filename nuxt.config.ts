// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/fonts'],
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600, 700, 900],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
    },
    families: [
      { name: 'DM Sans', global: true },
    ],
    provider: 'google',
  },
  components: [
    {
      path: "~/components/ui",
      pathPrefix: false,
    },
    {
      path: "~/components/profile",
      pathPrefix: false,
    },
    {
      path: "~/components/icons",
      pathPrefix: false,
    },
    {
      path: "~/components/results",
      pathPrefix: false,
    },
  ],
})