import { defineStore } from "pinia";
import { Engine } from "../model/Engine";
import axios from "axios";
import { Device, Theme } from "../model/Setting";

export default defineStore({
  id: "app",

  state() {
    return {
      engine: null as Engine | null,
      engines: null as Engine[] | null,
      hover: false,
      mousedown: false,
      caret: false,
      debug: false,
      deviceClass: Device.desktop,
      systemTheme: Theme.light,
      hoverEngine: null as Engine | null,
    };
  },

  actions: {
    // #region 搜索动作相关全局方法
    async doSearch(query: string): Promise<void> {
      const url = this.engine?.urlPattern.replace("{query}", query);
      await this.postRecord(query, this.engine!);
      window.location.href = url || " ";
    },
    async postRecord(query: string, engine: Engine): Promise<void> {
      await axios
        .post("https://api.catrefuse.com/add-record", {
          title: engine.title,
          url_pattern: engine.urlPattern,
          engine_id: engine.id,
          tags: engine.tags,
          search_string: query,
        })
        .then((res) => {
          if (process.env.NODE_ENV !== "production") {
            console.log(res);
          }
        })
        .catch((err) => console.error(err));
    },
    // #endregion

    // #region 通过各种属性选择搜索引擎的方法
    switchEngineByAdd(step: number): void {
      let currentIndex = 0;
      for (let index = 0; index < this.engines!.length; index++) {
        if (this.engines![index].title == this.engine?.title) {
          currentIndex = index;
        }
      }

      currentIndex = currentIndex + step;

      if (currentIndex >= this.engines!.length) {
        currentIndex = currentIndex - this.engines!.length;
      } else if (currentIndex < 0) {
        currentIndex = currentIndex + this.engines!.length;
      }
      this.engine = this.engines![currentIndex];
    },
    selectEngine(engine: Engine) {
      this.engine = engine;
    },
    selectEngineByIndex(index: number): void {
      this.engine = this.engines![index];
    },
    selectEngineByTitle(title: string): void {
      for (let item of this.engines!) {
        if (item.title == title) {
          this.engine = item;
          break;
        }
      }
    },
    selectEngineByCommand(command: string): void {
      for (let item of this.engines!) {
        if (item.command == command) {
          this.engine = item;
          break;
        }
      }
    },
    // #endregion
  },
});
