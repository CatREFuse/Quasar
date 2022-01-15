<template>
  <div
    class="inline-flex flex-row items-center h-14 w-full gap-2 py-0 pl-4 pr-2 rounded-[1rem] bg-overlay text-sm md:text-base align-middle sticky top-4 z-[500] transition-shadow"
    :class="{
      'shadow-2xl': searchbarTop <= 4 * 4
    }"
    ref="searchbar"
  >
    <img
      :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${iconName}`"
      class="w-6 h-6 select-none shrink-0"
      :class="{
        white: useStore().theme == Theme.dark
      }"
    />
    <input
      type="text"
      class="h-14 font-bold w-full placeholder:text-zinc-500 placeholder:font-bold outline-none bg-overlay text-main"
      :placeholder="state.placeholder"
      @keydown.enter="doSearch($event)"
      v-model="state.searchStr"
      ref="input"
      @mouseenter="turnToCaret"
      @mouseleave="turnToNormal"
      @compositionstart="startComposing"
      @compositionend="endComposing"
      autocorrect="off"
    />
    <p
      class="text-sm font-medium text-right whitespace-nowrap text-secondary relative left-3"
    >{{ state.tip }}</p>
    <box-icon
      name="bx-right-arrow-alt"
      size="l"
      class="select-none hover:cursor-pointer text-main shrink-0"
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
import boxIcon from '../widget/box-icon.vue';
import { Theme } from '../model/Setting'

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
  tip: ' ',
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
  if (state.searchStr == '#debug') {
    useStore().debug = true
    state.searchStr = ''
    return
  }

  if (state.searchStr == '') { return }

  // 检查是否在中文输入法状态下按下的 enter
  if (!state.isComposing) {
    const engine = useStore().engine

    useStore().postRecord(state.searchStr, useStore().engine!)

    window.open(searchUrl.value, '_blank')

  }
}


// 切换引擎后不丢失输入框 focus
// 在移动端 Safari 中无效
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
  for (let item of useStore().engines!) {
    if (state.searchStr == item.command || state.searchStr == item.title) {
      state.tip = `按下空格选择「${item.title}」`
      break;
    } else { state.tip = ' ' }

  }
  for (let item of useStore().engines!) {
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


<style scoped>
.white {
  filter: brightness(0%) invert(100%) !important;
  opacity: 0.8;
}
</style>