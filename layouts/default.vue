<template>
  <div class="Mode">
    <Header />
    <div class="container p-0">
      <nuxt />
    </div>
    <Footer />
  </div>
</template>

<style>
</style>

<script>
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  head: {
    script: [{ src: "/js/scripts.js", type: "text/javascript" }],
  },
};
</script>