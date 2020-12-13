export default {
  ssr: false,
  loadingIndicator: {
    name: 'folding-cube',
    color: '#f0db78',
    background: '#121212'
  },
  loading: {
    color: '#f0db78'
  },
  target: 'static',
  head: {
    titleTemplate: '%s - GeopJr',
    title: 'GeopJr',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'GeopJr\'s Personal Website' },
      { name: 'theme-color', content: '#f0db78' },
      // OpenGraph
      { name: 'og:site_name', content: 'GeopJr#4066' },
      { name: 'og:description', content: 'GeopJr\'s Personal Website' },
      { name: 'og:title', content: 'GeopJr' },
      { name: 'og:type', content: 'website' },
      { name: 'og:url', content: 'https://geopjr.xyz/' },
      { name: 'og:image:type', content: 'image/png' },
      { name: 'og:image', content: 'https://i.imgur.com/H7GmGzQ.png' },
      // Apple
      { name: 'apple-mobile-web-app-title', content: 'GeopJr' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' }
    ],
    link: [
      { rel: 'canonical', href: 'https://geopjr.xyz' },
      // Favicons
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png?v=2' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png?v=2' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico?v=2' },
      { rel: 'manifest', href: '/favicons/manifest.json' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico', color: '#ffff00' },
      // Apple
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' },
      // MEMEME
      { rel: 'me', href: 'https://tech.lgbt/@GeopJr' },
      { rel: 'me', href: 'https://github.com/GeopJr' }
    ]
  },
  plugins: [
    '@/plugins/cryptoicon',
    '@/plugins/fork-awesome'
  ],
  components: true,
  // Reduces vuetify size apparently
  build: {
    extractCSS: true
  },
  buildModules: [
    '@nuxtjs/eslint-module',
    ['@nuxtjs/vuetify', { treeShake: true }]
  ],
  modules: [
    '@nuxtjs/svg-sprite'
  ],
  vuetify: {
    icons: {
      iconfont: 'fa'
    },
    theme: {
      dark: true,
      themes: {
        light: {
          primary: '#a56262',
          accent: '#a56262'
        },
        dark: {
          primary: '#f0db78',
          accent: '#f0db78'
        }
      }
    }
  },
  css: ['@/assets/transitions.css']
}
