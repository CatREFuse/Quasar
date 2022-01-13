<template>
  <div class="flex flex-row items-start p-0 gap-3 md:gap-4 flex-wrap w-full user-select-none">
    <EngineLabel
      v-for="(engine, index) in useStore().engines"
      :key="index"
      :chosen="useStore().engine!.id == engine.id"
      :engine="engine"
    ></EngineLabel>
  </div>
</template>

<script setup lang="ts">
import EngineLabel from "./EngineLabel.vue";
import useStore from "../store/index";
import { Engine } from "../model/Engine";

</script>


