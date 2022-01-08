<template>
  <h4>Quasar 正在为你跳转...</h4>
</template>

<script setup lang='ts'>

import useStore from '../store/index'
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  query?: string,
  engine?: string,
}>()

let searched = ref(false)

onMounted(() => {
  if (!searched.value) {
    useStore().selectEngineByCommand(props.engine || 'bd')
    useStore().doSearch(props.query || '')
    searched.value = true
  } else {
    return
  }
})



</script>

<style lang='scss'>
</style>