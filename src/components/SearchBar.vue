<template>
  <div class="container">
    <div class="input">
      <img
        :src="`https://gitee.com/CatREFuse/img-base/raw/master/icons/${iconName}`"
        class="search-logo"
      />
      <input
        type="text"
        class="text_input"
        :placeholder="state.placeholder"
        @keydown.enter="doSearch($event)"
        v-model="state.searchStr"
        ref="input"
        @mouseenter="turnToCaret"
        @mouseleave="turnToNormal"
      />
      <p class="tip">{{ state.tip }}</p>
      <img src="../assets/icons/icon_right.svg" class="arrow" v-dot-hover @click="doSearch()" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, computed, watchEffect, Ref, ref, watch, onMounted } from 'vue'
import useStore from '../store/index'

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
  placeholder: ''
})

// 实时生成搜索 URL（其实这里可以在 press enter 之后再生成）
let searchUrl = computed(() => {
  return props.urlPattern.replace('{query}', state.searchStr)
})

// 搜索动作
function doSearch(event?: KeyboardEvent) {
  if (state.searchStr == '') { return }
  // 检查是否在中文输入法状态下按下的 enter
  event?.isComposing || window.open(searchUrl.value, '_blank')
}


const input: Ref<HTMLElement | null> = ref(null);



watch(() => useStore().engine, () => {

  setTimeout(() => input.value?.focus(), 100)

})

watch(() => state.searchStr, () => {
  if (state.searchStr.startsWith('\\')) { return }
  for (let item of useStore().engines) {
    if (state.searchStr.startsWith(item.command) || state.searchStr.startsWith(item.title)) {
      state.tip = `按下空格选择「${item.title}」`
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
    state.placeholder = `输入「${newValue.command}」可快速选择「${newValue.title}」`
  } else { state.placeholder = 'Search for Your Quasar' }
})


</script>

<style lang='scss' scoped>
.search-logo {
  width: 24px;
  height: 24px;
  user-select: none;
  -webkit-user-drag: none;
}

.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background-color: white;
  border-radius: 16px;
  padding: 0px 8px 0px 16px;
  width: 552px;
  height: 60px;

  font-size: 17px;
  .text_input {
    outline: none;
    border: none;
    background-color: none;
    flex-grow: 1;
    font-family: Avenir, "Pingfang SC", sans-serif;
    font-weight: 800;
    font-size: 17px;
    color: var(--text-main);
  }

  .text_input::-webkit-input-placeholder {
    color: var(--text-disabled);
  }

  .tip {
    font-size: 14px;
    color: var(--text-disabled);
    font-weight: 600;
  }

  .arrow:hover {
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }

  .arrow {
    user-select: none;
    -webkit-user-select: none;
    -webkit-user-drag: none;
  }
}
</style>