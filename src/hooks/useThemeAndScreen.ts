import useStore from "../store/index";
import { Device, Theme } from "../model/Setting";
import { reactive, onMounted, watchEffect } from "vue";

export function useThemeAndScreen() {
  function setDeviceClass() {
    // 根据 window.innerWidth 设置 DeviceClass
    useStore().deviceClass =
      window.innerWidth >= 736 ? Device.desktop : Device.phone;
  }

  function setThemeClassWithSystem() {
    // 根据 window.matchMedia 设置 setThemeClass
    useStore().systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? Theme.dark
      : Theme.light;
  }

  onMounted(() => {
    // 窗口宽度监听功能
    setDeviceClass();
    window.addEventListener("resize", () => {
      setDeviceClass();
    });

    // 系统主题查询
    setThemeClassWithSystem();
    // 监听系统主题是否发生变化
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", () => {
        setThemeClassWithSystem();
      });
  });

  watchEffect(() => {
    if (useStore().theme == "dark") {
      document.getElementsByTagName("html")[0].classList.add("dark");
    } else {
      document.getElementsByTagName("html")[0].classList.remove("dark");
    }
  });

  // 防止 transition 造成的刷新闪屏
  setTimeout(() => {
    document.body.classList.add("transition");
  }, 50);

}

export default useThemeAndScreen;
