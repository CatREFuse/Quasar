<template>
  <div
    class="relative inline-flex items-center gap-2 py-0 px-4 rounded-2xl h-11 md:h-12 md:transition-all select-none md:hover:shadow-2xl md:hover:transition-all hover:cursor-pointer group"
    @touch="selectEngine"
    @mousedown="selectEngine"
    :class="{
      'bg-overlay': !props.chosen,
      'bg-blue-500': props.chosen
    }"
    v-dot-hover
    @mouseenter="showTool"
    @mouseleave="dismissTool"
    ref="label"
  >
    <div class="w-4 h-4 md:w-6 md:h-6 overflow-hidden">
      <img
        :class="{
          white: props.chosen || (props.darkfilter && useStore().theme == Theme.dark),
          'brighter': useStore().theme == Theme.dark && !props.chosen
        }"
        :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${props.engine.iconName}`"
      />
    </div>

    <p
      class="font-bold text-main"
      :style="{
        color: props.chosen ? 'white !important' : ''
      }"
    >{{ props.engine.title }}</p>
  </div>
</template>

<script setup lang='ts'>

import { Ref, ref, onMounted } from 'vue'
import useStore from '../store/index'

import { Engine } from '../model/Engine'
import { Theme } from '../model/Setting'

const props = withDefaults(defineProps<{
  iconName?: string,
  title?: string,
  chosen?: boolean,
  engine: Engine,
  darkfilter?: boolean
}>(), {
  iconName: 'baidu.svg',
  title: '百度',
  chosen: false,
  darkfilter: false
})


function showTool() {

  useStore().hoverEngine = props.engine
}

function dismissTool() {

  useStore().hoverEngine = null
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
  filter: brightness(0%) invert(100%) !important;
}

.brighter {
  filter: brightness(120%);
}
</style>