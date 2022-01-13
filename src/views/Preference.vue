<template>
  <div
    class="w-full bg-white rounded-[1.5rem] shadow-2xl flex flex-col md:gap-6 md:p-8 gap-4 px-4 py-6"
  >
    <div class="flex flex-row items-center z-10 relative">
      <i
        class="bx bx-left-arrow-alt w-8 h-8 hover:cursor-pointer absolute left-0 text-[2rem]"
        color="#333"
        v-dot-hover
        @click="router.go(-1)"
      ></i>
      <h1 class="w-full align-center text-center font-bold">偏好设置</h1>
    </div>
    <div class="w-full flex flex-row items-center" v-if="useStore().deviceClass == 'desktop'">
      <h4 class="w-full text-gray-600 md:text-base text-sm">鼠标特效设置</h4>
      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="cursorSettingGroup"
        :defaultKey="cursorSettingGroup.indexOf(useStore().cursorEffect)!"
      ></MultiToggle>
    </div>
    <div class="w-full flex flex-row items-center">
      <h4 class="w-full text-gray-600 md:text-base text-sm">
        主题
        <span class="ml-1 text-xs text-gray-400 italic">即将支持</span>
      </h4>
      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="['亮色', '暗色']"
        :defaultKey="0"
        class="opacity-50 pointer-events-none"
      ></MultiToggle>
    </div>
    <div class="w-full flex flex-row items-center">
      <h4 class="w-full text-gray-600 md:text-base text-sm">
        命令模式
        <span class="ml-1 text-xs text-gray-400 italic">即将支持</span>
      </h4>
      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="['开', '关']"
        :defaultKey="1"
        class="opacity-50 pointer-events-none"
      ></MultiToggle>
    </div>
    <div class="w-full flex flex-row items-center">
      <h4 class="w-full text-gray-600 md:text-base text-sm">
        自定义搜索引擎
        <span class="ml-1 text-xs text-gray-400 italic">即将支持</span>
      </h4>
      <i class="bx bx-right-arrow-alt text-[2rem] opacity-30"></i>
    </div>
  </div>
</template>

<script setup lang='ts'>
import 'boxicons'
import MultiToggle from '../widget/multi-toggle.vue';
import { CursorEffect, Theme } from '../model/Setting'
import { ref } from 'vue'
import useStore from '../store/index'
import router from '../router'

const cursorSettingGroup = ref([CursorEffect.take, CursorEffect.follow, CursorEffect.none])

function localCangeCursorEffect(key: number): void {
  useStore().changeCursorEffect(cursorSettingGroup.value[key])
}


const themeSettingGroup = ref([Theme.light, Theme.dark])
</script>

<style lang='scss'>
</style>