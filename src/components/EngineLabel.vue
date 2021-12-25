<template>
  <div
    class="label"
    @click="$emit('chose', props.title)"
    :style="{
      'background-color': props.chosen ? 'var(--accent-color)' : 'white'
    }"
  >
    <div class="logo-container">
      <img
        :class="{
          white: props.chosen,
        }"
        :src="`./assets/icons/icon_${props.iconName}.svg`"
      />
    </div>

    <p
      class="title"
      :style="{
        color: props.chosen ? 'white' : 'var(--text-main)'
      }"
    >{{ props.title }}</p>
  </div>
</template>

<script setup lang='ts'>



const props = withDefaults(defineProps<{
  iconName?: string,
  title?: string,
  chosen?: boolean,
}>(), {
  iconName: 'baidu',
  title: '百度',
  chosen: false,
})

defineEmits(['chose'])


</script>

<style lang='scss' scoped>
.label {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 0 16px;

  background: #ffffff;
  border-radius: 16px;

  height: 48px;

  transition: all 0.1s ease-in-out;

  user-select: none;

  .logo-container {
    width: 24px;
    height: 24px;
    overflow: hidden;
    .white {
      filter: invert(50%) brightness(10000%) contrast(10000%);
    }
  }

  .title {
    font-weight: 600;
    font-size: 17px;
    line-height: 22px;
    color: var(--text-main);
  }
}

.label:hover {
  box-shadow: var(--drop-shadow);

  transition: all 0.1s ease-in-out;

  cursor: pointer;
}
</style>