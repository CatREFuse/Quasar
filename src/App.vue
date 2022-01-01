<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from './views/Home.vue'
import { onMounted, reactive, watch } from 'vue'
import useStore from './store/index'

onMounted(() => {
  document.title = "Quasar"
})

const state = reactive({
  cursor: {
    x: 0, y: 0
  },
  visualCursor: {
    x: 0, y: 0,
  },
})

const cursorUI = reactive({
  grow: 1,
  degree: 0
})

watch(() => state.visualCursor, (newValue, oldValue) => {

  const delta = {
    x: newValue.x - oldValue.x,
    y: newValue.y - oldValue.y
  }

  const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y)

  cursorUI.grow = Math.min(Math.max(distance / 20, 1), 2)
  cursorUI.degree = Math.atan2(delta.y, delta.x) * 180 / Math.PI


})

function moveHandler(event: MouseEvent) {
  state.cursor = {
    x: event.clientX,
    y: event.clientY
  }
}

onMounted(() => {
  setInterval(() => {
    state.visualCursor = { x: state.cursor.x, y: state.cursor.y }

  }, 50)
})

function shrinkCursor() {
  useStore().mousedown = true;
}

function resetCursor() {
  useStore().mousedown = false;
}

</script>

<template>
  <div
    class="main-container"
    @mousemove="moveHandler($event)"
    @mousedown="shrinkCursor"
    @mouseup="resetCursor"
  >
    <div
      class="cursor-container"
      :style="{
        transform: `translate(${state.visualCursor.x - 25}px,${state.visualCursor.y - 25}px)`
      }"
    >
      <div
        :class="{ cursor: true, hover: useStore().hover, clicked: useStore().mousedown }"
        :style="{
          transform: `rotate(${cursorUI.degree}deg) scale(${cursorUI.grow}, 1)  `,
        
        }"
      ></div>
    </div>

    <Home></Home>
    <img class="bg_img" src="./assets/quasar_logo_bg.svg" />
    <!-- <div class="debugger">
      <h4>debugger</h4>
      <p>cursor: {{ state.cursor.x }}, {{ state.cursor.y }}</p>
      <p>visualCusor: {{ state.visualCursor.x }}, {{ state.visualCursor.y }}</p>
    </div>-->
  </div>
</template>

<style lang="scss">
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;

  transition: all 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  pointer-events: none;
  mix-blend-mode: difference;
  padding: 0;
  z-index: 999;
}
.cursor {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: white;
  z-index: 9999;
  pointer-events: none;
  transition: width 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    height 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    background-color 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    margin 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75);
}

.clicked {
  width: 10px !important;
  height: 10px !important;
  transition: width 0.2s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    height 0.12 cubic-bezier(0.1, 0.28, 0.45, 0.75);
}

.hover {
  background-color: transparent;
  border-color: pink;
  border-width: 2px;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-radius: 25px;
}

.main-container {
  min-height: 100vh;
  margin: 0;
  padding: 100px 0 0 160px;
}

.debugger {
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 150px;
}

body {
  --body-base: #f5f5f5;
  --text-main: rgba(0, 0, 0, 0.75);
  --text-disabled: rgba(0, 0, 0, 0.25);
  --accent-color: #4994ec;
  --drop-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  margin: 0;
  padding: 0;
  background-color: var(--body-base);
  font-family: Avenir, "Pingfang SC", Helvetica, sans-serif;
}

.bg_img {
  position: fixed;
  z-index: -1000;
  right: 0;
  bottom: 0;
}
</style>
