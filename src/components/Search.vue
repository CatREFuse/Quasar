<template>
  <div class="flex flex-col gap-4 md:gap-6" @keydown.tab.prevent="switchEngine($event)">
    <img src="../assets/quasar_logo.svg" class="w-40 md:w-60 select-none" />
    <SearchBar
      class="w-full"
      :iconName="useStore().engine?.iconName"
      :url-pattern="useStore().engine?.urlPattern"
    />
    <EngineList></EngineList>
    <div
      name="footer"
      class="text-center md:fixed md:bottom-6 md:right-[28px] md:text-right md:z-[100] select-text text-sm mt-4 font-medium opacity-30"
      v-if="!useStore().debug"
      v-text-hover
    >
      <p class="my-2">
        © 2020 - 2021 🍓
        <a
          href="http:///bad-strawberry.com"
          v-dot-hover
          target="_blank"
          class="decoration-none hover:underline"
        >Bad Strawberry</a>.
        <span>All rights reserved.</span>
      </p>
      <p>
        <a
          href="https://www.craft.do/s/Gi8HESIcZQsSIY"
          target="_blank"
          v-dot-hover
          class="decoration-none hover:underline"
        >用户协议</a> ·
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          v-dot-hover
          class="decoration-none hover:underline"
        >浙 ICP 备 2020033146 号 - 2</a>
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
