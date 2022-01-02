<template>
  <div class="search-container" @keydown.tab.prevent="switchEngine($event)">
    <img src="../assets/quasar_logo.svg" class="logo" />
    <SearchBar
      class="search-bar"
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

<style lang='scss'>
.logo {
  width: 240px;
  user-select: none;
  -webkit-user-drag: none;
}
.search-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}


</style>