
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || 'Official website of Narendra Ram | UX Designer | Frontend Developer | Freelancer' }
    ],
    link: [
      { rel: 'icon', type: 'image/ico', href: '/initial.ico' }
    ],
    script: [
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
    { src: "~/plugins/aos", ssr: false },
    { src: "~/node_modules/jquery/dist/jquery.min.js", ssr: false },
    { src: "~/node_modules/bootstrap/dist/js/bootstrap.min.js", ssr: false },
    { src: "~/node_modules/holderjs/holder.min.js", ssr: false },
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