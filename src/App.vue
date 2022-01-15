<script setup lang="ts">
import { onMounted, reactive, watch, watchEffect, ref } from 'vue'
import useStore from './store/index'
import { getEngineList } from './query/query'
import { Device, Theme, CursorEffect } from './model/Setting';
import Debugger from './components/Debugger.vue';
import Footer from './components/Footer.vue';
import { useMouse } from './utils/dom-utils'
import useThemeAndScreen from './hooks/useThemeAndScreen'
import DotCursor from './widgets/dot-cursor.vue';
import useBrowserCheck from './hooks/useBrowserCheck'
import BoxIcon from './widgets/box-icon.vue';


useThemeAndScreen()
useBrowserCheck()

const cursor = useMouse()

onMounted(() => {
  getEngineList();
});


// #endregion


watchEffect(() => {
  // 动态加载外部 js 文件，实现隐藏 cursor
  if (useStore().deviceClass == Device.phone) {
    if (document.getElementById("no-cursor-link"))
      document.getElementsByTagName("head")[0].removeChild(document.getElementById("no-cursor-link")!)
  }
})

watchEffect(() => {
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
    <dot-cursor
      :follow="useStore().cursorEffect == CursorEffect.follow"
      :shape="useStore().hover ? 'hover' : useStore().caret ? 'caret' : 'dot'"
      v-show="useStore().cursorEffect != CursorEffect.none && useStore().deviceClass != Device.phone"
    ></dot-cursor>

    <box-icon
      name="bxs-cog"
      class="text-secondary hover:cursor-pointer absolute top-4 right-4"
      v-dot-hover
      size="l"
      @click.native="router.push('/preference')"
    ></box-icon>

    <div
      id="grid-container"
      class="col-start-2 col-end-12 mt-12 relative md:min-w-[512px] md:max-w-[764px]"
      :class="useStore().compactMode ? 'md:mx-auto md:w-[640px] md:mt-[12%]' : ' md:col-start-2 md:col-end-9  md:mt-16 '"
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
      :src="useStore().theme == Theme.light ? '/assets/quasar_logo_bg.svg' : '/assets/quasar_logo_bg_dark.svg'"
      :style="{
        transform: `none` || `translate(${-cursor.x / 80}px, ${-cursor.y / 80}px`,
      }"
    />
  </div>
  <transition-group name="slide-down">
    <Debugger v-if="useStore().debug" @close="useStore().debug = false">
      <p>cursor: {{ cursor.x }}, {{ cursor.y }}</p>
      <p>deviceClass: {{ useStore().deviceClass }}</p>
      <p>systemTheme: {{ useStore().systemTheme }}</p>
      <p>compactMode: {{ useStore().compactMode }}</p>
      <p>userAgent: {{ useStore().userAgent.str }}</p>
    </Debugger>
    <Footer v-else="!useStore().debug" v-text-hover></Footer>
  </transition-group>
</template>

<style lang="scss">
@import "./css/transition.scss";
@import "https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css";

body {
  --body-base: #f5f5f5;
  --text-main: rgba(0, 0, 0, 0.75);
  --text-disabled: rgba(0, 0, 0, 0.25);
  --accent-color: #4994ec;
  --drop-shadow: 0px 16px 32px rgba(0, 0, 0, 0.16);
  margin: 0;
  padding: 0;
  font-family: Avenir, "Pingfang SC", Helvetica, sans-serif;
}
</style>
