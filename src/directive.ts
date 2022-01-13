import { App } from "vue";
import useStore from "./store/index";

export default function (app: App<Element>) {
  app.directive("dot-hover", (el: HTMLElement, binding) => {
    el.onmouseenter = () => {
      useStore().hover = binding.value == undefined ? true : !binding.value;
    };
    el.onmouseleave = () => {
      useStore().hover = false;
    };
  });

  app.directive("text-hover", {
    mounted(el: HTMLElement, binding): void {
      el.onmouseenter = () => {
        useStore().caret = true;
      };
      el.onmouseleave = () => {
        useStore().caret = false;
      };
    },
  });
}
