export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'final-dentist',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        crossorigin: 'anonymous',
        integrity:
          'sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm',

        href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css',
      },

      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
        integrity:
          'sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w==',
        crossorigin: 'anonymous',
      },
    ],
    script: [
      {
        src: 'https://code.jquery.com/jquery-3.2.1.slim.min.js',
        integrity:
          'sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN',
        crossorigin: 'anonymous',
      },

      {
        src: 'https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js',
        integrity:
          'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q',
        crossorigin: 'anonymous',
      },


      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js',
        integrity:
          'sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl',
        crossorigin: 'anonymous',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['./assets/style/style.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        dir: 'ltr',
      },
      {
        code: 'ar',
        iso: 'ar-EG',
        file: 'ar-Eg.js',
        dir: 'rtl',
      },
    ],
    lazy: true,
    langDir: 'lang/',
    defaultLocale: 'en',

    vueI18n: {
      fallbackLocale: 'en',

      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'lang',
        redirectOn: 'root', // recommended
      },
    },
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    BASE_URL: 
   // 'http://127.0.0.1:8000/api/',
    'https://fi.mohamed-walid.pw/api/',
    FILE_URL: 'https://fi.mohamed-walid.pw/',
    FIREBASE_TOKEN: 'AAAAIdfsg-s:APA91bGPrbGqxD38AeyKl_jLaYjW3uZ_K9iHwPj0s7t0tQksvbIaQxMM_iszM39kILAPK81XJ5r60Vt8TDZhrm23eEQkgY0_RlR92WEYyACvauBcdL5Mih9MGieP_y2m7x83vMKqCuQm',
    APPLICATION_CODE: 'iydbTVvESX3vWGUB9JhhvqXHZJEimc5fYkp8cNTjYVL07L2VCI',
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
