<template>
  <div class="flex flex-row items-start p-0 gap-3 md:gap-4 flex-wrap w-full user-select-none">
    <EngineListLabel
      v-for="(engine, index) in useStore().engines"
      :key="index"
      :chosen="useStore().engine!.id == engine.id"
      :engine="engine"
      :darkfilter="engine.reverseInDark == 1"
    ></EngineListLabel>
  </div>
</template>

<script setup lang="ts">
import EngineListLabel from "./EngineListLabel.vue";
import useStore from "../store/index";


</script>


