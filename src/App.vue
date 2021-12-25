<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './views/Home.vue'
</script>

<template>
  <Home></Home>
  <img class="bg_img" src="src/assets/quasar_logo_bg.svg" />
</template>

<style lang="scss">
body {
  --body-base: #f5f5f5;
  --text-main: rgba(0, 0, 0, 0.75);
  --text-disabled: rgba(0, 0, 0, 0.25);
  --accent-color: #4994ec;
  --drop-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  margin: 0;
  padding: 0;
  background-color: var(--body-base);
}
.bg_img {
  position: fixed;
  z-index: -1000;
  right: 0;
  bottom: 0;
}
</style>
