<template>
  <div class="search-container">
    <img src="../assets/quasar_logo.svg" class="logo" />
    <SearchBar
      class="search-bar"
      :iconName="useStore().engine.iconName"
      :url-pattern="useStore().engine.urlPattern"
    />
    <EngineList></EngineList>
  </div>
</template>

<script setup lang='ts'>
import SearchBar from './SearchBar.vue';
import EngineList from './EngineList.vue';
import useStore from '../store/index'


</script>

<style lang='scss'>
.logo {
  width: 240px;
}
.search-container {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>