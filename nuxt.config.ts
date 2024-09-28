// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
import {definePreset} from "@primeuix/styled";

const Noir = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{zinc.50}',
      100: '{zinc.100}',
      200: '{zinc.200}',
      300: '{zinc.300}',
      400: '{zinc.400}',
      500: '{zinc.500}',
      600: '{zinc.600}',
      700: '{zinc.700}',
      800: '{zinc.800}',
      900: '{zinc.900}',
      950: '{zinc.950}'
    },
    colorScheme: {
      light: {
        primary: {
          color: '{zinc.950}',
          inverseColor: '#ffffff',
          hoverColor: '{zinc.900}',
          activeColor: '{zinc.800}'
        },
        highlight: {
          background: '{zinc.950}',
          focusBackground: '{zinc.700}',
          color: '#ffffff',
          focusColor: '#ffffff'
        }
      },
      dark: {
        primary: {
          color: '{zinc.50}',
          inverseColor: '{zinc.950}',
          hoverColor: '{zinc.100}',
          activeColor: '{zinc.200}'
        },
        highlight: {
          background: 'rgba(250, 250, 250, .16)',
          focusBackground: 'rgba(250, 250, 250, .24)',
          color: 'rgba(255,255,255,.87)',
          focusColor: 'rgba(255,255,255,.87)'
        }
      }
    }
  }
});

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig : {
    public : {
      apiUrl: process.env.API_ENDPOINT
    }
  },
  modules :['@primevue/nuxt-module', '@pinia/nuxt','@pinia-plugin-persistedstate/nuxt', '@vee-validate/nuxt',],
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
        preset: Noir,
        options: {
          prefix: 'p',
          darkModeSelector: '.p-dark',
          cssLayer: false
        }
      }
    }
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})