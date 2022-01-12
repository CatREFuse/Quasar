<template>
  <div class="flex flex-col gap-6" @keydown.tab.prevent="switchEngine($event)">
    <img src="../assets/quasar_logo.svg" class="w-60 select-none" />
    <SearchBar
      class="w-full"
      :iconName="useStore().engine?.iconName"
      :url-pattern="useStore().engine?.urlPattern"
    />
    <EngineList></EngineList>
  </div>
</template>

<script setup lang='ts'>
import SearchBar from './SearchBar.vue';
import EngineList from './EngineList.vue';
import useStore from '../store/index'

// 切换引擎
function switchEngine(event?: KeyboardEvent) {
  useStore().switchEngineByAdd(event?.shiftKey ? -1 : 1)
}

</script>
