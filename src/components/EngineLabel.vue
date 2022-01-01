<template>
  <div
    class="label"
    @click="$emit('chose', props.title)"
    :style="{
      'background-color': props.chosen ? 'var(--accent-color)' : 'white'
    }"
    v-dot-hover
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
  </div>
</template>

<script setup lang='ts'>

import useStore from '../store/index'

const props = withDefaults(defineProps<{
  iconName?: string,
  title?: string,
  chosen?: boolean,
}>(), {
  iconName: 'baidu.svg',
  title: '百度',
  chosen: false,
})

defineEmits(['chose'])

function hoverOn() { useStore().hover = true }
function hoverOff() { useStore().hover = false }


</script>

<style lang='scss' scoped>
.label {
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