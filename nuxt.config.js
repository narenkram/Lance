
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || 'Narendra Ram | Frontend Developer at Aroliant',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Official website of Narendra Ram' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/initial.png' }
    ],
    script: [
      { src: "https://kit.fontawesome.com/6265b6c9f2.js" },
    ],
  },
  router: {
    base: '/nkr96.github.io/'
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
    { src: "aos/dist/aos.css" },
    { src: "~/assets/style.scss" }
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "~/plugins/aos", ssr: false }
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { },
    vendor: ['aos']
  }
}