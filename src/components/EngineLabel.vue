<template>
  <div
    class="label"
    @click="selectEngine"
    :style="{
      'background-color': props.chosen ? 'var(--accent-color)' : 'white'
    }"
    v-dot-hover
    @mouseenter="showTool"
    @mouseleave="dismissTool"
    ref="label"
  >
    <div class="logo-container">
      <img
        :class="{
          white: props.chosen,
        }"
        :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${props.iconName}`"
      />
    </div>

    <p
      class="title"
      :style="{
        color: props.chosen ? 'white' : 'var(--text-main)'
      }"
    >{{ props.title }}</p>
    <tooltip
      class="tooltip"
      v-if="props.engine.loginRequire == 1 && showTooltip"
      content="需要登录"
      :style="{
        left: `${labelWidth / 2 - 45}px`
      }"
    ></tooltip>
  </div>
</template>

<script setup lang='ts'>

import { Ref, ref, onMounted } from 'vue'
import useStore from '../store/index'
import tooltip from './tooltip.vue'
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

<style lang='scss' scoped>
.tooltip {
  position: absolute;
  top: -72px;
}
.label {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  background: #ffffff;
  border-radius: 16px;

  height: 48px;

  transition: all 0.1s ease-in-out;

  user-select: none;
  -webkit-user-select: none;

  .logo-container {
    width: 24px;
    height: 24px;
    overflow: hidden;
    .white {
      filter: brightness(0%) invert(100%);
    }
  }

  .title {
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: var(--text-main);
  }
}

.label:hover {
  box-shadow: var(--drop-shadow);

  transition: all 0.1s ease-in-out;

  cursor: pointer;
}
</style>