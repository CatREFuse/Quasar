<template>
  <div id="container" :style="containerStyle">
    <i :class="`bx ${props.name}`" :style="iconStyle"></i>
  </div>
</template>

<script setup lang='ts'>
import "boxicons"
import { reactive } from 'vue'

type Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'
const sizeDict = {
  xs: 1,
  s: 1.25,
  m: 1.5,
  l: 2,
  xl: 3,
  xxl: 4
}

const props = withDefaults(defineProps<{
  name?: string,
  size?: Size,
  full?: boolean,
}>(), {
  name: 'bx-left-arrow-alt',
  size: 'm',
  full: false,
})

let iconStyle = reactive({
  'font-size': `${sizeDict[props.size]}rem`,
  'transform': `${props.full ? 'scale(1.5)' : ''}`
})

let containerStyle = reactive({
  width: `${sizeDict[props.size]}rem`,
  height: `${sizeDict[props.size]}rem`,
})



</script>

<style lang='scss'>
#container {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
</style>