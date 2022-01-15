<template>
  <div
    class="flex flex-col gap-4 md:gap-6 min-w-[256px]"
    @keydown.tab.prevent="switchEngine($event)"
  >
    <div class="flex flex-row items-center pr-2">
      <img
        :src="useStore().theme == Theme.light ? '/assets/quasar_logo.svg' : '/assets/quasar_logo_dark.svg'"
        class="w-40 md:w-60 select-none"
      />
      <div id="spacer" class="flex-1"></div>

      <box-icon
        name="bxs-cog"
        class="opacity-30 text-secondary hover:cursor-pointer"
        v-dot-hover
        size="l"
        @click.native="router.push('/preference')"
      ></box-icon>
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
import router from '../router'
import { Theme } from '../model/Setting'
import boxIcon from '../widget/box-icon.vue';

// 切换引擎
function switchEngine(event?: KeyboardEvent) {
  useStore().switchEngineByAdd(event?.shiftKey ? -1 : 1)
}



</script>
