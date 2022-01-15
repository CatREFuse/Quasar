import useStore from "../store/index";
import { CursorEffect } from "../model/Setting";

function useBrowserCheck() {
  // 兼容性检查
  useStore().userAgent.str = window.navigator.userAgent;
  const userAgent = window.navigator.userAgent;
  useStore().userAgent.isFirefox = userAgent.includes("Firefox");
  useStore().userAgent.isWindows = userAgent
    .toLowerCase()
    .includes("Windows".toLowerCase());
  useStore().userAgent.isChrome = userAgent.includes("Chrome");
  useStore().userAgent.isSafari =
    userAgent.includes("Safari") &&
    !useStore().userAgent.str.includes("Chrome");
  useStore().userAgent.isWebKit = userAgent
    .toLowerCase()
    .includes("WebKit".toLowerCase());
  if (!useStore().userAgent.isWebKit) {
    useStore().cursorEffect = CursorEffect.none;
  }
}

export default useBrowserCheck;
