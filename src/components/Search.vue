<template>
  <div class="search-container" @keydown.tab.prevent="switchEngine($event)">
    <img src="../assets/quasar_logo.svg" class="logo" />
    <SearchBar
      class="search-bar"
      :iconName="useStore().engine?.iconName"
      :url-pattern="useStore().engine?.urlPattern"
    />
    <EngineList></EngineList>
    <div class="footer" v-if="!useStore().debug" v-text-hover>
      <p>
        © 2020 - 2021 🍓
        <a
          href="http:///bad-strawberry.com"
          v-dot-hover
          target="_blank"
        >Bad Strawberry</a>, All rights reserved.
      </p>
      <p>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          v-dot-hover
        >浙 ICP 备 2020033146 号</a>
      </p>
    </div>
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

.footer {
  position: fixed;
  bottom: 24px;
  right: 28px;

  text-align: right;

  font-size: 14px;
  font-family: Avenir, "Pingfang SC";
  color: var(--text-disabled);
  margin-top: 16px;
  font-weight: 500;
  // font-style: italic;
  p {
    margin: 8px 0;
    padding: 0;
  }
  a {
    color: var(--text-disabled);
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
}
</style>