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
        placeholder="Search for Your Quasar"
        @keydown.enter="doSearch($event)"
        v-model="state.searchStr"
        ref="input"
      />
      <img src="../assets/icons/icon_right.svg" class="arrow" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { reactive, computed, watchEffect, Ref, ref } from 'vue'
import useStore from '../store/index'

const props = defineProps({
  urlPattern: {
    type: String,
    default: "https://www.baidu.com/s?wd={query}",
    required: false,
  },
  iconName: {
    type: String,
    default: "baidu",
    required: false,
  }
})

const state = reactive({
  searchStr: '',
})

// 实时生成搜索 URL（其实这里可以在 press enter 之后再生成）
let searchUrl = computed(() => {
  return props.urlPattern.replace('{query}', state.searchStr)
})

// 搜索动作
function doSearch(event: KeyboardEvent) {
  // console.log(searchUrl.value);
  // 检查是否在中文输入法状态下按下的 enter
  event.isComposing || window.open(searchUrl.value, '_blank')
}

const input: Ref<HTMLElement | null> = ref(null);


watchEffect(() => {
  if (useStore().engine) {
    input.value?.focus();
  }
})


</script>

<style lang='scss' scoped>
.search-logo {
  width: 24px;
  height: 24px;
}

.input {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
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

  .arrow:hover {
    cursor: pointer;
  }
}
</style>