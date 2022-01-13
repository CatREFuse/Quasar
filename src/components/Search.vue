<template>
  <div
    class="flex flex-col gap-4 md:gap-6 min-w-[256px]"
    @keydown.tab.prevent="switchEngine($event)"
  >
    <div class="flex flex-row items-center pr-2">
      <img src="../assets/quasar_logo.svg" class="w-40 md:w-60 select-none" />
      <div id="spacer" class="flex-1"></div>
      <i
        class="bx bxs-cog h-[1.75rem] w-[1.75rem] hover:cursor-pointer text-[1.75rem] opacity-30"
        v-dot-hover
        @click="router.push('/preference')"
      ></i>
    </div>
    <SearchBar
      :iconName="useStore().engine!.iconName"
      :url-pattern="useStore().engine!.urlPattern"
    />
    <EngineList></EngineList>
  </div>
</template>

<script setup lang='ts'>
import 'boxicons'
import SearchBar from './SearchBar.vue';
import EngineList from './EngineList.vue';
import useStore from '../store/index'
import MultiToggle from '../widget/multi-toggle.vue';
import router from '../router'

// 切换引擎
function switchEngine(event?: KeyboardEvent) {
  useStore().switchEngineByAdd(event?.shiftKey ? -1 : 1)
}



</script>
