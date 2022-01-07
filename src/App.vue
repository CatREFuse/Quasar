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
    x: 0, y: 0
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



onMounted(() => {

  document.onmousemove = function moveHandler(event: MouseEvent) {
    state.cursor = {
      x: event.clientX,
      y: event.clientY
    }
  }

  document.onmousedown = () => { useStore().mousedown = true }
  document.onmouseup = () => { useStore().mousedown = false }

  setInterval(() => {
    state.visualCursor = { x: state.cursor.x, y: state.cursor.y }
  }, 50)
})



function trigDebugMode() {
  useStore().debug = !useStore().debug;
}

</script>

<template>
  <div class="main-container">
    <div
      class="cursor-container"
      :style="{
        transform: `translate(${state.visualCursor.x - 25}px,${state.visualCursor.y - 25}px)`
      }"
    >
      <div
        :class="{ cursor: true, hover: useStore().hover, clicked: useStore().mousedown, caret: useStore().caret }"
        :style="{
          transform: useStore().caret ? 'none' : `rotate(${cursorUI.degree}deg) scale(${cursorUI.grow}, 1)  `,
        }"
      ></div>
    </div>

    <Home></Home>
    <img
      class="bg_img"
      src="./assets/quasar_logo_bg.svg"
      :style="{
        transform: `none` || `translate(${-state.cursor.x / 80}px, ${-state.cursor.y / 80}px`,
      }"
    />
    <div class="debugger">
      <div class="debug-trigger" v-dot-hover @click="trigDebugMode"></div>
      <div v-if="useStore().debug">
        <h3>debugger</h3>
        <p>cursor: {{ state.cursor.x }}, {{ state.cursor.y }}</p>
      </div>
    </div>

    <div class="footer" v-if="!useStore().debug" v-text-hover>
      <p>
        © 2020 - 2021 🍓
        <a
          href="http:///bad-strawberry.com"
          v-dot-hover
          target="_blank"
        >Bad Strawberry</a>, All rights reserved.
      </p>
      <p>
        <a href="https://www.craft.do/s/Gi8HESIcZQsSIY" target="_blank" v-dot-hover>用户协议</a> ·
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          v-dot-hover
        >浙 ICP 备 2020033146 号 - 2</a>
      </p>
    </div>
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
  mix-blend-mode: difference;
  pointer-events: none;

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
  border-radius: 50px !important;
  transition: width 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    height 0.12 cubic-bezier(0.1, 0.28, 0.45, 0.75);
}

.caret {
  width: 4px;
  height: 24px;
  border-radius: 2px;
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
  margin: 0;
  padding: 100px 0 0 160px;
  user-select: none;
  -webkit-user-select: none;
}

.debugger {
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 200px;
  font-family: "Fira Code", "Courier New", Courier, monospace;
  h3 {
    margin-bottom: 1rem;
  }
  .debug-trigger {
    width: 48px;
    height: 48px;
    position: fixed;
    top: 16px;
    right: 16px;
  }
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
  right: -10px;
  bottom: -10px;
  pointer-events: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-user-drag: none;
}

.footer {
  position: fixed;
  bottom: 24px;
  right: 28px;

  text-align: right;

  z-index: -1;

  user-select: text;
  -webkit-user-select: text;

  font-size: 14px;
  font-family: Avenir, "Pingfang SC";
  color: var(--text-disabled);
  margin-top: 16px;
  font-weight: 500;
  // font-style: italic;
  p {
    margin: 8px 0;
    padding: 0;
  }
  a {
    color: var(--text-disabled);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>
