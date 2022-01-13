<template>
  <div class="flex flex-row items-start p-0 gap-3 md:gap-4 flex-wrap w-full user-select-none">
    <EngineLabel
      v-for="(engine, index) in useStore().engines"
      :key="index"
      :title="engine.title"
      :icon-name="engine.iconName"
      :index="index"
      @chose="choseLabel($event, index)"
      :chosen="useStore().engine?.title == engine.title"
      :engine="engine"
    ></EngineLabel>
  </div>
</template>

<script setup lang="ts">
import EngineLabel from "./EngineLabel.vue";
import useStore from "../store/index";

function choseLabel(engineTitle: string, index: number) {
  useStore().selectEngineByIndex(index)
}

defineEmits(["engine-change"]);

</script>


