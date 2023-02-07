export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      apiUrl: process.env.SUPABASE_URL,
      apiKey: process.env.SUPABASE_KEY,
    },
  },

  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    [
      '@vueuse/nuxt',
      {
        autoImports: ['useLocalStorage', ['useLocalStorage']],
      },
    ],
    [
      '@pinia/nuxt',
      { autoImports: ['defineStore', ['defineStore', 'definePiniaStore']] },
    ],
  ],

  imports: {
    dirs: ['stores'],
  },

  components: {
    dirs: ['~/components', '~/components/tb'],
  },

  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
})
