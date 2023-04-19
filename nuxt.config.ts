// https://nuxt.com/docs/api/configuration/nuxt-config
/* eslint-disable camelcase */
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt'
    //    '@vite-pwa/nuxt'
  ],
  imports: {
    dirs: ['stores']
  },
  routeRules: {
    '/spa': { ssr: false },
    '/static': { static: true },
    '/swr': { swr: true }
  },
  app: {
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        { children: 'JavaScript is required' }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE_URL || 'https://preview.mahali.me/'
    }
  },
  // nitro: {
  //   devProxy: {
  //     '/api/v1': {
  //       target: 'https://preview.mahali.me',
  //       changeOrigin: true,
  //       prependPath: true,
  //       secure: false
  //     }
  //   }
  // },
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api/v1': {
  //         target: 'https://preview.mahali.me/',
  //         changeOrigin: true,
  //         secure: false
  //       }
  //     }
  //   }
  // },
  css: [
    '@unocss/reset/tailwind.css'
  ],
  sourcemap: {
    server: true,
    client: false
  },
  i18n: {
    defaultLocale: 'fr',
    langDir: 'lang',
    locales: [
      { code: 'en', iso: 'en-GB', file: 'en.json' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.json' }
    ],
    lazy: true,
    vueI18n: './i18n.config.ts'
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
      'acceptHMRUpdate'
    ]
  }
  // pwa: {
  //   registerType: 'autoUpdate',
  //   manifest: {
  //     name: 'My Nuxt PWA',
  //     short_name: 'MyNuxtPWA',
  //     theme_color: '#ffffff',
  //     icons: [
  //       {
  //         src: 'pwa-192x192.png',
  //         sizes: '192x192',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png'
  //       },
  //       {
  //         src: 'pwa-512x512.png',
  //         sizes: '512x512',
  //         type: 'image/png',
  //         purpose: 'any maskable'
  //       }
  //     ]
  //   },
  //   client: {
  //     installPrompt: true,
  //     // you don't need to include this: only for testing purposes
  //     // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
  //     periodicSyncForUpdates: 20
  //   },
  //   devOptions: {
  //     enabled: true,
  //     type: 'module'
  //   }
  // }
})
