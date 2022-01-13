<template>
  <div
    class="relative inline-flex items-center gap-2 py-0 px-4 bg-white rounded-2xl h-11 md:h-12 md:transition-all select-none md:hover:drop-shadow-2xl md:hover:transition-all hover:cursor-pointer group"
    @click="selectEngine"
    :style="{
      'background-color': props.chosen ? 'var(--accent-color)' : 'white'
    }"
    v-dot-hover
    @mouseenter="showTool"
    @mouseleave="dismissTool"
    ref="label"
  >
    <div class="w-4 h-4 md:w-6 md:h-6 overflow-hidden">
      <img
        :class="{
          white: props.chosen,
        }"
        :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${props.iconName}`"
      />
    </div>

    <p
      class="font-bold text-base md:text[17px]"
      :style="{
        color: props.chosen ? 'white' : 'var(--text-main)'
      }"
    >{{ props.title }}</p>
  </div>
</template>

<script setup lang='ts'>

import { Ref, ref, onMounted } from 'vue'
import useStore from '../store/index'

import { Engine } from '../model/Engine'

const props = withDefaults(defineProps<{
  iconName?: string,
  title?: string,
  chosen?: boolean,
  index: number,
  engine: Engine,
}>(), {
  iconName: 'baidu.svg',
  title: '百度',
  chosen: false,
})



function showTool() {

  useStore().hoverEngine = props.engine
}

function dismissTool() {

  useStore().hoverEngine = undefined
}

defineEmits(['chose'])

const label: Ref<HTMLElement | null> = ref(null)
const labelWidth = ref(0)

onMounted(() => {
  labelWidth.value = label.value?.clientWidth || 0
})

function selectEngine() {
  useStore().selectEngine(props.engine)
}

</script>

<style lang='css' scoped>
.white {
  filter: brightness(0%) invert(100%);
}
</style>