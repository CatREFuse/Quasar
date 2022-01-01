import { defineStore } from 'pinia';
import { Engine } from '../model/Engine';

export default defineStore({
    id: 'app',

    state() {
        return {
            // engine: {
            //     title: '',
            //     iconName: '',
            //     urlPattern: '',
            // },
            engine: new Engine('', '', '', false, ''),
            engines: [] as Engine[],
            hover: false,
            mousedown: false,
            caret: false,
            debug: false,
        };
    },
    actions: {
        selectEngine(engine: Engine) {
            this.engine = engine;
        },
        selectEngineByIndex(index: number): void {
            this.engine = this.engines[index];
        },
        selectEngineByTitle(title: string): void {
            for (let item of this.engines) {
                if (item.title == title) {
                    this.engine = item;
                    break;
                }
            }
        },
        selectEngineByCommand(command: string): void {
            for (let item of this.engines) {
                if (item.command == command) {
                    this.engine = item;
                    break;
                }
            }
        },
    },
});
