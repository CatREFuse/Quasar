<template>
  <div
    class="w-full bg-overlay rounded-[1.5rem] shadow-2xl flex flex-col md:gap-6 md:p-8 gap-4 px-4 py-6"
  >
    <div id="header" class="flex flex-row items-center z-10 relative">
      <box-icon
        full
        size="m"
        v-dot-hover
        @click="router.go(-1)"
        class="absolute hover:cursor-pointer left-0 text-main"
      ></box-icon>
      <h1 class="w-full align-center text-center font-bold text-main">偏好设置</h1>
    </div>
    <div id="自定义搜索引擎" class="w-full flex flex-row items-center">
      <div class="flex flex-col gap-0 w-full">
        <h4 class="w-full text-main md:text-base text-sm">自定义搜索引擎</h4>
        <span class="text-xs text-secondary">即将支持</span>
      </div>
      <box-icon name="bx-right-arrow-alt" class="text-[2rem] opacity-30 text-secondary" size="l"></box-icon>
    </div>
    <div id="分割线" class="h-[1px] bg-overlay-2"></div>
    <div id="实验室 header" class="flex flex-row text-main">
      <box-icon name="bxs-flask" size="m"></box-icon>
      <h1 class="font-bold text-lg ml-1 text-main">Quasar Lab 实验功能</h1>
    </div>
    <div id="鼠标设置" class="flex flex-row items-center" v-if="useStore().deviceClass == 'desktop'">
      <div class="w-full flex flex-col gap-0">
        <h4 class="text-main md:text-base text-sm">鼠标特效设置</h4>
        <span class="mt-0 text-xs text-secondary text-ellipsis w-full">
          {{
            useStore().userAgent.isWebKit ? '性能要求较高' : '仅支持 Chrome 内核和 Safari 浏览器'
          }}
        </span>
      </div>

      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="cursorSettingGroup"
        :defaultKey="cursorSettingGroup.indexOf(useStore().cursorEffect)!"
        :disabled="!useStore().userAgent.isWebKit"
      ></MultiToggle>
    </div>
    <div id="主题设置" class="w-full flex flex-row items-center">
      <div class="flex flex-col gap-0 w-full">
        <h4 class="w-full gap-0 text-main md:text-base text-sm">主题</h4>
        <span class="mt-0 text-xs text-secondary text-ellipsis w-full">切换主题</span>
      </div>

      <MultiToggle
        v-dot-hover
        @choose="localChangeThemeSetting($event)"
        :items="['亮色', '暗色', '跟随系统']"
        :defaultKey="themeSettingGroup.indexOf(useStore().userThemeSetting)"
        :disabled="false"
      ></MultiToggle>
    </div>
    <div id="命令模式" class="w-full flex flex-row items-center">
      <div class="flex flex-col gap-0 w-full">
        <h4 class="w-full text-main md:text-base text-sm">命令模式</h4>
        <span class="text-xs text-secondary">即将支持</span>
      </div>

      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="['开', '关']"
        :defaultKey="1"
        disabled
      ></MultiToggle>
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
import BoxIcon from '../widget/box-icon.vue'

const cursorSettingGroup = ref([CursorEffect.take, CursorEffect.follow, CursorEffect.none])

function localCangeCursorEffect(key: number): void {
  useStore().changeCursorEffect(cursorSettingGroup.value[key])
}


const themeSettingGroup = ref([Theme.light, Theme.dark, Theme.auto])

function localChangeThemeSetting(key: number): void {
  useStore().changeThemeSetting(themeSettingGroup.value[key])

}
</script>


<style lang='scss'>
</style>