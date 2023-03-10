// https://nuxt.com/docs/api/configuration/nuxt-config
/* eslint-disable camelcase */
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@vite-pwa/nuxt'
  ],
  // runtimeConfig: {
  //   public: {
  //     baseURL: process.env.BASE_URL || 'https://localhost:3000/api/v1'
  //   }
  // },
  vite: {
    server: {
      proxy: {
        '/api/v1': {
          target: 'https://preview.mahali.me/',
          changeOrigin: true,
          secure: false
        }
      }
    }
  },
  css: [
    '@unocss/reset/tailwind.css'
  ],
  sourcemap: {
    server: true,
    client: false
  },
  i18n: {
    langDir: 'lang',
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'fr', file: 'fr.json' }
    ],
    lazy: true,
    defaultLocale: 'fr',

    vueI18n: {
      legacy: false,
      fallbackLocale: 'en'
    }
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'] // import { defineStore as definePiniaStore } from 'pinia'
    ]
  },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'My Nuxt PWA',
      short_name: 'MyNuxtPWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable'
        }
      ]
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}']
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20
    },
    devOptions: {
      enabled: true,
      type: 'module'
    }
  }
})
