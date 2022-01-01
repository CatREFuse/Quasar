import { App } from 'vue';
import useStore from './store/index';

export default function (app: App<Element>) {
    app.directive('dot-hover', {
        mounted(el: HTMLElement, binding): void {
            el.onmouseenter = () => {
                useStore().hover = true;
            };
            el.onmouseleave = () => {
                useStore().hover = false;
            };
        },
    });

    app.directive('text-hover', {
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
