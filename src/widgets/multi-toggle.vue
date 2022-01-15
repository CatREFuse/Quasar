<template>
  <div
    class="inline-flex flex-row gap-[6px] p-[6px] bg-overlay-2 rounded-xl"
    :class="props.disabled ? 'opacity-40' : ''"
  >
    <div
      v-for="(item, index) in items"
      :key="index"
      class="px-2 py-1 flex justify-center items-center rounded-lg text-sm select-none transition-all md:text-sm hover:cursor-pointer"
      :class="{
        'bg-blue-500 font-medium text-white': chosenKey == index,
        'text-gray-400': chosenKey != index,
        'pointer-events-none': props.disabled
      }"
      @click="choseKey(index)"
    >
      <div class="whitespace-nowrap">{{ item }}</div>
    </div>
  </div>
</template>


<script setup lang='ts'>
import { ref } from 'vue'

const props = withDefaults(defineProps<{
  items?: string[],
  defaultKey: number,
  disabled?: boolean,
}>(), {
  items: () => ['跟随', '替代', '无特效'],
  defaultKey: 0,
  disabled: false,
})

const chosenKey = ref(props.defaultKey)

function choseKey(index: number) {
  chosenKey.value = index
  emit('choose', index)
}

const emit = defineEmits(['choose'])

</script>

<style lang='scss'>
</style>