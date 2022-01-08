<template>
  <h4>Quasar 正在为你跳转...</h4>
</template>

<script setup lang='ts'>

import useStore from '../store/index'
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  query?: string,
  engine?: string,
}>()

onMounted(() => {
  useStore().selectEngineByCommand(props.engine || 'bd')
  useStore().doSearch(props.query || '')
})



</script>

<style lang='scss'>
</style>