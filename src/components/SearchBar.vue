<template>
  <div
    class="inline-flex flex-row items-center h-14 w-full gap-2 py-0 pl-4 pr-2 rounded-[1rem] bg-white text-sm md:text-base align-middle sticky top-4 z-[1000] transition-shadow"
    :class="{
      'shadow-2xl': searchbarTop <= 4 * 4
    }"
    ref="searchbar"
  >
    <img
      :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${iconName}`"
      class="w-6 h-6 select-none"
    />
    <input
      type="text"
      class="h-14 font-bold w-full placeholder:text-gray-300 placeholder:font-bold outline-none"
      :placeholder="state.placeholder"
      @keydown.enter="doSearch($event)"
      v-model="state.searchStr"
      ref="input"
      @mouseenter="turnToCaret"
      @mouseleave="turnToNormal"
      @compositionstart="startComposing"
      @compositionend="endComposing"
    />
    <p
      class="text-xs font-medium text-right whitespace-nowrap"
      :style="{
        color: state.tip == '点击以搜索' ? 'var(--text-mian)' : 'var(--text-disabled)'
      }"
    >{{ state.tip }}</p>
    <img
      src="../assets/icons/icon_right.svg"
      class="select-none hover:cursor-pointer w-8 h-8"
      v-dot-hover
      @click="doSearch()"
      :style="{
        opacity: state.searchStr == '' ? 0.3 : 1
      }"
      @mouseenter="showClickTip"
      @mouseleave="dismissClickTip"
      @compositionstart="startComposing"
      @compositionend="endComposing"
    />
  </div>
</template>

<script setup lang='ts'>
import { reactive, computed, watchEffect, Ref, ref, watch, onMounted } from 'vue'
import useStore from '../store/index'
import axios from 'axios'

function turnToCaret() { useStore().caret = true; }
function turnToNormal() { useStore().caret = false; }


const props = defineProps({
  urlPattern: {
    type: String,
    default: "https://www.baidu.com/s?wd={query}",
    required: false,
  },
  iconName: {
    type: String,
    default: "baidu.svg",
    required: false,
  }
})

const state = reactive({
  tip: '',
  searchStr: '',
  placeholder: '',
  isComposing: false,
})

// 实时生成搜索 URL（其实这里可以在 press enter 之后再生成）
let searchUrl = computed(() => {
  return props.urlPattern.replace('{query}', state.searchStr)
})

function startComposing() {
  // 兼容 Safari
  state.isComposing = true

}

function endComposing() {
  // 按回车之后是先触发 @compostionend 然后再触发 @keydown.enter, 因此加个延迟
  setTimeout(() => {
    state.isComposing = false
  }, 10)

}

// 搜索动作
function doSearch(event?: KeyboardEvent) {
  if (state.searchStr == '') { return }

  // 检查是否在中文输入法状态下按下的 enter
  if (!state.isComposing) {
    const engine = useStore().engine

    useStore().postRecord(state.searchStr, useStore().engine!)

    window.open(searchUrl.value, '_blank')

  }




}


// 切换引擎后不丢失输入框 focus
const input: Ref<HTMLElement | null> = ref(null);

watch(() => useStore().engine, () => {

  setTimeout(() => input.value?.focus(), 100)

})

// 获取 searchbar 引用
const searchbar: Ref<HTMLElement | null> = ref(null);
let searchbarTop = ref(100);

onMounted(() => {
  // 判断搜索框是不是到了顶部
  window.addEventListener('scroll', () => {
    searchbarTop.value = searchbar.value!.getBoundingClientRect().top
  })
})


watch(() => state.searchStr, () => {
  if (state.searchStr.startsWith('\\')) { return }
  for (let item of useStore().engines) {
    if (state.searchStr == item.command || state.searchStr == item.title) {
      state.tip = `按下空格选择「${item.title}」 ${(item.loginRequire == 1) ? ' / 需要登录' : ''}`
      break;
    } else { state.tip = '' }

  }
  for (let item of useStore().engines) {
    if (state.searchStr.startsWith(item.command + ' ') || state.searchStr.startsWith(item.title + ' ')) {
      useStore().selectEngine(item)
      state.searchStr = ''
    }

  }
})

watch(() => useStore().hoverEngine, (newValue, oldValue) => {

  if (state.searchStr != '') { return }
  if (newValue) {
    state.placeholder = `输入「${newValue.command}」可选择「${newValue.title}」`
  } else { state.placeholder = 'Search for Your Quasar' }
})

function showClickTip() {
  if (state.searchStr == '') { return }
  // state.tip = "点击以搜索"
}

function dismissClickTip() {
  if (state.searchStr == '') { return }
  state.tip = ""
}


</script>
