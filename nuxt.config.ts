// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig : {
    public : {
      apiUrl: process.env.API_ENDPOINT
    }
  },
  modules :['@primevue/nuxt-module', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt',],
  css: ['~/assets/css/main.css'],
  app:{
    head:{
      script:[
        {
          src:"https://kit.fontawesome.com/f1a55980af.js",
          crossorigin:"anonymous",
        },
      ]
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: {
      ripple: true,
      inputVariant: 'filled',
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    }
  }
})