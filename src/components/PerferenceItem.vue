<template>
  <div class="w-full flex flex-row items-center">
    <div class="flex flex-col gap-0 w-full">
      <h4 class="w-full text-main md:text-base text-sm">{{ props.title }}</h4>
      <span class="text-xs text-secondary">{{ props.subtitle }}</span>
    </div>
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>

const props = withDefaults(defineProps<{
  title?: string,
  subtitle?: string
}>(), {
  title: '主标题',
  subtitle: '副标题'
})

</script>

<style lang='scss'>
</style>