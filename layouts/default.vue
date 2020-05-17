<template>
  <div class="Mode">
    <nuxt />
    <div class="LightElement DisplayMode" onclick="displayMode()"></div>
    <div class="DarkElement DisplayMode" onclick="displayMode()"></div>
  </div>
</template>

<style>
</style>

<script>
export default {
  head: {
    script: [{ src: "/js/scripts.js", type: "text/javascript" }]
  }
};
</script>