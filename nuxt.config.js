import { I18N } from './config'
module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Eforea website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Eforea website' },
      {
        name: 'google-site-verification',
        content: 'h5IX9GyC2DWKxfbRT4yFV-u4wOQC5jlfvWxKVSQuAtg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat|Playfair+Display:400,400i,700i|Roboto:300,300i,400i,400,500,700&amp;subset=vietnamese',
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.2.0/css/all.css',
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css',
      },
    ],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: '#3B8070' },
  /*
   ** Build configuration
   */
  css: ['@/assets/styles/main.styl'],
  axios: {
    proxy: true,
  },
  proxy: {
    '/posts': {
      target: 'https://cms.eforealifestyle.com/wp-json/wp/v2',
    },
    '/categories': {
      target: 'https://cms.eforealifestyle.com/wp-json/wp/v2',
    },
  },
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
  },
  modules: [
    '~/modules/bootstrap-vue/module',
    '@nuxtjs/axios',
    ['@nuxtjs/google-tag-manager', { id: 'GTM-W9MP5WF' }],
    [
      'nuxt-facebook-pixel-module',
      {
        /* module options */
        track: 'PageView',
        pixelId: '1910688522573948',
        disabled: false,
      },
    ],
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab'],
          },
        ],
      },
    ],
    ['nuxt-i18n', I18N],
  ],
  plugins: [
    {
      src: '~/plugins/vue-carousel',
      ssr: false,
    },
    {
      src: '~/plugins/vue-inject',
      ssr: false,
    },
  ],
}
