<template>
  <div
    class="fixed bottom-4 right-4 w-[300px] flex flex-col rounded-lg overflow-hidden bg-zinc-800 shadow-2xl"
  >
    <div
      id="debugger-header"
      class="w-full text-center flex flex-row items-center justify-center text-white h-8 text-sm"
    >
      <div class="select-none">debugger</div>
      <div
        id="dot-controller"
        class="flex flex-row items-center gap-2 absolute left-0 p-3 hover:cursor-pointer"
        @click="emit('close')"
      >
        <div class="rounded-full bg-red-500 h-3 w-3"></div>
        <div class="rounded-full bg-yellow-500 h-3 w-3"></div>
        <div class="rounded-full bg-gray-500 h-3 w-3"></div>
      </div>
    </div>
    <div id="debugger-body" class="font-mono text-green-600 bg-overlayshadow-xl p-5" v-text-hover>
      <div class="flex flex-col gap-1">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import useStore from '../store/index'
import { reactive, } from 'vue'


const emit = defineEmits(['close'])
</script>

<style lang='scss'>
</style>

