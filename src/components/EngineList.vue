<template>
  <div class="list">
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

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
  flex-wrap: wrap;
  width: 576px;
}
</style>
