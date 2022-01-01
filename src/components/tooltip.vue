<template>
  <div class="bubble">指令：{{ props.content }}</div>
</template>

<script setup lang='ts'>
const props = withDefaults(defineProps<{
  content?: string
}>(), {
  content: "提示气泡"
})
</script>

<style lang='scss' scoped>
.bubble {
  color: white;
  font-family: Avenir, "Pingfang SC";
  font-weight: bold;
  width: 90px;
  height: 40px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  position: relative;
  margin-top: 20px;
  text-align: center;
  line-height: 40px;
  backdrop-filter: blur(4px);
  filter: drop-shadow(0 16px 32px rgba(0, 0, 0, 0.16));
}
.bubble::before {
  position: absolute;
  bottom: -16px;
  left: calc(45px - 8px);
  content: "";
  width: 0;
  height: 0;
  border-top: 8px solid rgba(0, 0, 0, 0.6);
  border-bottom: 8px solid transparent;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
  backdrop-filter: blur(4px);
}
</style>