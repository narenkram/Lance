export default {
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Personal Website Template for freelancers, individuals, developers, etc. | Lance',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Free Template for designers, UX and UI designers, Frontend developers, and Freelancers. Available with source code and figma design file.' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/logo.png' }
    ],
    script: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-848NRXZRM8", async: true },
    ],
  },
  target: 'static',
  router: {
    base: '/'
  },
  // Enable this for production build
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [
    { src: "~/assets/style.scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/node_modules/jquery/dist/jquery.min.js", ssr: false },
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.min.js", ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-cloudflare-analytics', {
      token: 'be37b5e813594ac59f7ba1144d4f7705',
    }],
  ],
  /*
  
   ** Build configuration
   */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    },
    vendor: [],
    plugins: [
    ]
  }
}