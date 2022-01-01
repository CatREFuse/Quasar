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
            hover: false,
            mousedown: false,
            caret: false,
        };
    },
});
