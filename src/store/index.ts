import { defineStore } from 'pinia';
import { Engine } from '../model/Engine';

interface AppStateInterface {
    engine?: Engine;
    engines: Engine[];
    hover: boolean;
    mousedown: boolean;
    debug: boolean;
    caret: boolean;
    hoverEngine?: Engine;
}

export default defineStore({
    id: 'app',

    state() {
        return <AppStateInterface>{
            engine: new Engine('', '', '', false, ''),
            engines: [] as Engine[],
            hover: false,
            mousedown: false,
            caret: false,
            debug: false,
        };
    },
    actions: {
        switchEngineByAdd(step: number): void {
            let currentIndex = 0;
            for (let index = 0; index < this.engines.length; index++) {
                if (this.engines[index].title == this.engine?.title) {
                    currentIndex = index;
                }
            }

            currentIndex = currentIndex + step;

            if (currentIndex >= this.engines.length) {
                currentIndex = currentIndex - this.engines.length;
            } else if (currentIndex < 0) {
                currentIndex = currentIndex + this.engines.length;
            }
            this.engine = this.engines[currentIndex];
        },
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
