import { reactive, onMounted } from "vue";

export function useMouse() {
  let cursor = reactive({ x: 0, y: 0 });
  document.addEventListener(
    "mousemove",
    function moveHandler(event: MouseEvent) {
      cursor.x = event.clientX;
      cursor.y = event.clientY;
    }
  );
  return cursor;
}


