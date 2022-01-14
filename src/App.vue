<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { onMounted, reactive, watch, watchEffect, ref } from 'vue'
import useStore from './store/index'
import { getEngineList } from './query/query'
import { Device, Theme, CursorEffect } from './model/Setting';
import Debugger from './components/Debugger.vue';


// #region 主题监听
function setDeviceClass() {
  // 根据 window.innerWidth 设置 DeviceClass
  useStore().deviceClass = window.innerWidth >= 736 ? Device.desktop : Device.phone
}

function setThemeClassWithSystem() {
  // 根据 window.matchMedia 设置 setThemeClass
  useStore().systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? Theme.dark : Theme.light;
}

onMounted(() => {
  // 窗口宽度监听功能
  setDeviceClass();
  window.addEventListener('resize', () => {
    setDeviceClass();
  })

  // 系统主题查询
  setThemeClassWithSystem()
  // 监听系统主题是否发生变化
  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener('change', () => {
      setThemeClassWithSystem();
    })
})

// #endregion

// #region 鼠标特效
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

  cursorUI.grow = Math.min(Math.max(distance / 5, 1), 2)
  cursorUI.degree = Math.atan2(delta.y, delta.x) * 180 / Math.PI

})


onMounted(() => {

  getEngineList()

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
  }, 10)

  // 兼容性检查
  useStore().userAgent.str = window.navigator.userAgent
  const userAgent = window.navigator.userAgent
  useStore().userAgent.isFirefox = userAgent.includes('Firefox')
  useStore().userAgent.isWindows = userAgent.toLowerCase().includes('Windows'.toLowerCase())
  useStore().userAgent.isChrome = userAgent.includes('Chrome')
  useStore().userAgent.isSafari = userAgent.includes('Safari') && !useStore().userAgent.str.includes('Chrome')
  useStore().userAgent.isWebKit = userAgent.toLowerCase().includes('WebKit'.toLowerCase())
  if (!useStore().userAgent.isWebKit) { useStore().cursorEffect = CursorEffect.none }

})


// #endregion


watchEffect(() => {
  // 动态加载外部 js 文件，实现隐藏 cursor
  if (useStore().deviceClass == Device.phone) {
    if (document.getElementById("no-cursor-link"))
      document.getElementsByTagName("head")[0].removeChild(document.getElementById("no-cursor-link")!)
  }

  if (useStore().cursorEffect == CursorEffect.take) {
    var stylesheet = document.createElement("link");
    stylesheet.href = useStore().userAgent.isSafari ? "./css/no-cusor-safari.css" : "./css/no-cusor.css";
    stylesheet.rel = "stylesheet";
    stylesheet.type = "text/css";
    stylesheet.id = 'no-cursor-link'
    document.getElementsByTagName("head")[0].appendChild(stylesheet);
  } else {
    if (document.getElementById("no-cursor-link"))
      document.getElementsByTagName("head")[0].removeChild(document.getElementById("no-cursor-link")!)
  }
})

// #region 路由动效相关
import router from "./router"

let transition = ref('slide-left')

router.beforeEach((to, from) => {
  if (from.meta.depth != undefined) {
    transition.value = (to.meta.depth as number) < (from.meta.depth as number) ?
      "slide-left" : "slide-right";
  } else {
    transition.value = 'fade'
  }
})
// #endregion


</script>

<template>
  <div class="grid grid-cols-12 gap-2 text-gray-800 select-none">
    <div
      class="cursor-container invisible md:visible"
      v-if="useStore().cursorEffect != CursorEffect.none"
      :style="{
        transform: `translate(${state.visualCursor.x - 25}px,${state.visualCursor.y - 25}px)`,
        transition: `all ${useStore().cursorEffect == CursorEffect.follow ? '0.1s' : '0.05s'} cubic-bezier(0.1, 0.28, 0.45, 0.75)`
      }"
    >
      <div
        :class="{ cursor: true, hover: useStore().hover, clicked: useStore().mousedown, caret: useStore().caret }"
        :style="{
          transform: useStore().caret ? 'none' : `rotate(${cursorUI.degree}deg) scale(${cursorUI.grow}, 1)  `,
        }"
      ></div>
    </div>
    <div
      class="col-start-2 col-end-12 md:col-start-2 md:col-end-9 md:min-w-[512px] md:max-w-[764px] mt-12 md:mt-16 relative"
    >
      <router-view v-slot="{ Component, route }">
        <keep-alive>
          <transition :name="transition" mode="out-in">
            <component :is="Component" />
          </transition>
        </keep-alive>
      </router-view>
    </div>

    <img
      name="background-img"
      class="fixed z-[-1000] -right-1 -bottom-1 pointer-events-none select-none"
      src="./assets/quasar_logo_bg.svg"
      :style="{
        transform: `none` || `translate(${-state.cursor.x / 80}px, ${-state.cursor.y / 80}px`,
      }"
    />
  </div>
  <Debugger>cursor: {{ state.cursor.x }}, {{ state.cursor.y }}</Debugger>
  <div
    name="footer"
    class="invisible md:visible md:fixed md:bottom-6 md:right-[28px] md:text-right md:z-[100] select-text text-sm mt-4 font-medium opacity-30"
    v-if="!useStore().debug"
    v-text-hover
  >
    <p class="my-2">
      © 2020 - 2021 🍓
      <a
        href="http:///bad-strawberry.com"
        v-dot-hover
        target="_blank"
        class="decoration-none hover:underline"
      >Bad Strawberry</a>.
      <span>All rights reserved.</span>
    </p>
    <p>
      <a
        href="https://www.craft.do/s/Gi8HESIcZQsSIY"
        target="_blank"
        v-dot-hover
        class="decoration-none hover:underline"
      >用户协议</a> ·
      <a
        href="https://beian.miit.gov.cn/#/Integrated/index"
        target="_blank"
        v-dot-hover
        class="decoration-none hover:underline"
      >浙 ICP 备 2020033146 号 - 2</a>
    </p>
  </div>
</template>

<style lang="scss">
@import "./css/transition.scss";
@import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";

.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;

  // transition: all 0.05s cubic-bezier(0.1, 0.28, 0.45, 0.75);
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
  transition: width 0.04s cubic-bezier(0.1, 0.28, 0.45, 0.75),
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
</style>
