<template>
  <div class="Mode">
    <Header />
    <main>
      <nuxt />
    </main>
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