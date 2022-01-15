<template>
  <div
    id="dot-cursor"
    class="cursor-container"
    :style="{
      transform: `translate(${visualCursor.x - 25}px,${visualCursor.y - 25}px)`,
      transition: `all ${props.follow ? '0.08s' : '0.05s'} cubic-bezier(0.1, 0.28, 0.45, 0.75)`
    }"
  >
    <div
      :class="{ cursor: true, hover: props.shape == 'hover', clicked: mousedown, caret: props.shape == 'caret' }"
      :style="{
        transform: props.shape == 'caret' ? 'none' : `rotate(${cursorUI.degree}deg) scale(${cursorUI.grow}, 1)  `,
      }"
    ></div>
  </div>
</template>


<script setup lang='ts'>
import { reactive, watch, ref } from 'vue'

// enum Cursor {
//   dot = 'dot',
//   hover = 'hover',
//   caret = 'caret',
// }

const props = withDefaults(defineProps<{
  follow?: boolean,
  shape?: string,
}>(), {
  follow: false,
  shape: 'dot',
})

let cursor = reactive({ x: 0, y: 0 });
document.addEventListener('mousemove', function moveHandler(event: MouseEvent) {
  cursor.x = event.clientX;
  cursor.y = event.clientY;
  // console.log(cursor.x, cursor.y);
});


let mousedown = ref(false)
document.addEventListener("mousedown", () => {
  mousedown.value = true;
})
document.addEventListener('mouseup', () => {
  mousedown.value = false;
})


let visualCursor = reactive({
  x: 0, y: 0
})

const cursorUI = reactive({
  grow: 1,
  degree: 0
})


setInterval(() => {
  visualCursor.x = cursor.x
  visualCursor.y = cursor.y

}, 10)

let direction = { dx: 0, dy: 0 }

let mouseleave = ref(true)

watch(() => [visualCursor.x, visualCursor.y], (newValue, oldValue) => {
  if (mouseleave.value) { return }
  const delta = {
    x: newValue[0] - oldValue[0],
    y: newValue[1] - oldValue[1]
  }

  direction.dx = delta.x;
  direction.dy = delta.y

  const distance = Math.sqrt(delta.x * delta.x + delta.y * delta.y)

  cursorUI.grow = Math.min(Math.max(distance / 10, 1), 2)
  cursorUI.degree = Math.atan2(delta.y, delta.x) * 180 / Math.PI




})

document.getElementsByTagName('html')[0].addEventListener('mouseleave', () => {

  mouseleave.value = true


  // const { x, y } = visualCursor
  // const { dx, dy } = direction
  // const [vw, vh] = [window.innerWidth, window.innerHeight]
  // const k = dy / dx; const b = y - k * x; // y = kx + b


  // const p1 = { x: vw, y: k * vw + b }  // x = vw  y = ?
  // const p2 = { x: 0, y: b }  // x = 0  y = ?
  // const p3 = { x: (vh - b) / k, y: vh }  // x = ?  y = vh
  // const p4 = { x: -b / k, y: 0 }  // x = ?  y = 0



  // function isInBorders(x: number, y: number) {
  //   return (x <= vw && x >= 0) && (y <= vh && y >= 0)
  // }

  // const points = [p1, p2, p3, p4].filter((item) => isInBorders(item.x, item.y))


  // const targets = points.filter((item) => ((item.x - x) * dx >= 0) && ((item.y - y) * dy >= 0))

  // visualCursor.x = targets[0]?.x
  // visualCursor.y = targets[0]?.y



  cursorUI.grow = 1;
  cursorUI.degree = 0;

})

document.getElementsByTagName('html')[0].addEventListener('mouseenter', () => mouseleave.value = false)

</script>

<style lang='scss' scoped>
.cursor-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;

  // transition: all 0.05s cubic-bezier(0.1, 0.28, 0.45, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
  mix-blend-mode: difference;
  pointer-events: none;

  padding: 0;
  z-index: 999;
}
.cursor {
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: white;

  z-index: 9999;
  pointer-events: none;
  transition: width 0.04s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    height 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    background-color 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    margin 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75);
}

.clicked {
  width: 10px !important;
  height: 10px !important;
  border-radius: 50px !important;
  transition: width 0.1s cubic-bezier(0.1, 0.28, 0.45, 0.75),
    height 0.12 cubic-bezier(0.1, 0.28, 0.45, 0.75);
}

.caret {
  width: 4px;
  height: 24px;
  border-radius: 2px;
}

.hover {
  background-color: transparent;
  border-color: rgb(255, 255, 255);
  border-width: 2px;
  width: 40px;
  height: 40px;
  border-style: solid;
  border-radius: 25px;
}
</style>