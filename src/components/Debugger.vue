<template>
  <div
    id="debugger"
    class="fixed bottom-4 right-4 w-[300px] font-['Fira_Code', 'Courier New']"
    v-text-hover
  >
    <div
      class="fixed top-1 right-1 w-12 h-12 hover:cursor-pointer"
      v-dot-hover
      @click="useStore().debug = useStore().debug ? false : true"
    ></div>
    <div v-if="useStore().debug" class="flex flex-col gap-1">
      <h3 class="mb-1">debugger</h3>
      <slot></slot>
      <p>deviceClass: {{ useStore().deviceClass }}</p>
      <p>systemTheme: {{ useStore().systemTheme }}</p>
      <p>isFirefox: {{ useStore().userAgent.isFirefox }}</p>
      <p>isWindows: {{ useStore().userAgent.isWindows }}</p>
      <p>isChrome: {{ useStore().userAgent.isChrome }}</p>
      <p>isSafari: {{ useStore().userAgent.isSafari }}</p>
      <p>isWebKit: {{ useStore().userAgent.isWebKit }}</p>
      <p>userAgent: {{ useStore().userAgent.str }}</p>
    </div>
  </div>
</template>

<script setup lang='ts'>
import useStore from '../store/index'
import { reactive } from 'vue'

</script>

<style lang='scss'>
</style>