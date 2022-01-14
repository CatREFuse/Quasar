<template>
  <div
    id="debugger"
    class="fixed bottom-4 right-4 w-[200px] font-['Fira_Code', 'Courier']"
    v-text-hover
  >
    <div
      class="fixed top-1 right-1 w-12 h-12 hover:cursor-pointer"
      v-dot-hover
      @click="useStore().debug = useStore().debug ? false : true"
    ></div>
    <div v-if="useStore().debug">
      <h3 class="mb-1">debugger</h3>
      <slot></slot>
      <p>deviceClass: {{ useStore().deviceClass }}</p>
      <p>systemTheme: {{ useStore().systemTheme }}</p>
      <p>userAgent: {{ userAgent.str }}</p>
      <p>browser: {{ userAgent.browser }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import useStore from '../store/index'
import { reactive } from 'vue'
let userAgent = reactive({
  str: '',
  browser: '',
})

userAgent.str = window.navigator.userAgent

</script>

<style lang='scss'>
</style>