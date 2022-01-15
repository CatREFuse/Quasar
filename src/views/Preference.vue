<template>
  <div
    class="w-full bg-overlay rounded-[1.5rem] shadow-2xl flex flex-col md:gap-6 md:p-8 gap-6 px-5 py-6 transition-all"
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

    <perference-item title="切换外观" subtitle=" ">
      <MultiToggle
        v-dot-hover
        @choose="localChangeThemeSetting($event)"
        :items="['亮色', '暗色', '跟随系统']"
        :defaultKey="themeSettingGroup.indexOf(useStore().userThemeSetting)"
        :disabled="false"
      ></MultiToggle>
    </perference-item>

    <perference-item title="自定义搜索引擎" subtitle="即将支持">
      <box-icon name="bx-right-arrow-alt" class="text-[2rem] opacity-30 text-secondary" size="l"></box-icon>
    </perference-item>

    <div id="分割线" class="h-[1px] bg-overlay-2"></div>

    <div id="实验室 header" class="flex flex-row text-main">
      <box-icon name="bxs-flask" size="m"></box-icon>
      <h1 class="font-bold text-lg ml-1 text-main">Quasar Lab 实验功能</h1>
    </div>

    <perference-item
      title="鼠标特效设置"
      :subtitle="useStore().userAgent.isWebKit ? '此功能对性能要求较高' : '仅支持 Chrome 内核和 Safari 浏览器'"
      v-if="useStore().deviceClass != Device.phone"
    >
      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="cursorSettingGroup"
        :defaultKey="cursorSettingGroup.indexOf(useStore().cursorEffect)!"
        :disabled="!useStore().userAgent.isWebKit"
      ></MultiToggle>
    </perference-item>

    <perference-item title="简洁模式" subtitle="简洁模式不会显示搜索引擎列表">
      <MultiToggle
        v-dot-hover
        @choose="localChangeCompactMode($event)"
        :items="['开', '关']"
        :defaultKey="useStore().compactMode ? 0 : 1"
      ></MultiToggle>
    </perference-item>

    <perference-item title="命令模式" subtitle="即将支持">
      <MultiToggle
        v-dot-hover
        @choose="localCangeCursorEffect($event)"
        :items="['开', '关']"
        :defaultKey="1"
        disabled
      ></MultiToggle>
    </perference-item>
  </div>
</template>

<script setup lang='ts'>
import 'boxicons'
import MultiToggle from '../widgets/multi-toggle.vue';
import { CursorEffect, Theme } from '../model/Setting'
import { ref } from 'vue'
import useStore from '../store/index'
import router from '../router'
import BoxIcon from '../widgets/box-icon.vue'
import PerferenceItem from '../components/PerferenceItem.vue';
import { Device } from '../model/Setting'

const cursorSettingGroup = ref([CursorEffect.take, CursorEffect.follow, CursorEffect.none])

function localCangeCursorEffect(key: number): void {
  useStore().changeCursorEffect(cursorSettingGroup.value[key])
}


const themeSettingGroup = ref([Theme.light, Theme.dark, Theme.auto])

function localChangeThemeSetting(key: number): void {
  useStore().changeThemeSetting(themeSettingGroup.value[key])
}

const compactModeSettingGroup = ref([true, false])

function localChangeCompactMode(key: number): void {
  useStore().changeCompactMode(compactModeSettingGroup.value[key])
}
</script>


<style lang='scss'>
</style>