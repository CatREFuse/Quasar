import { defineStore } from 'pinia';

export default defineStore({
    id: 'app',

    state() {
        return {
            engine: {
                title: '',
                iconName: '',
                urlPattern: '',
            },
        };
    },
});
