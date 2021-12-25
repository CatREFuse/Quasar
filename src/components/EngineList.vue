<template>
  <div class="list">
    <EngineLabel
      v-for="(engine, index) in state.engines"
      :key="index"
      :title="engine.title"
      :icon-name="engine.iconName"
      @chose="choseLabel($event, index)"
      :chosen="useStore().engine.title == engine.title"
    ></EngineLabel>
  </div>
</template>

<script setup lang='ts'>
import EngineLabel from './EngineLabel.vue';
import { onMounted, reactive } from 'vue'
import axios from 'axios'
import useStore from '../store/index'

interface Engine {
  title: string,
  iconName: string,
  urlPattern: string,
}

const state = reactive({
  engines: Array<Engine>(),
})

onMounted(() => {
  axios.get('public/engines.json').then(res => {
    state.engines = res.data
    useStore().engine = res.data[0]
  }).catch(err => {
    alert(err)
  })
})

function choseLabel(engineTitle: string, index: number) {
  useStore().engine = state.engines[index]
}

defineEmits(['engine-change'])

</script>

<style lang='scss' scoped>
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