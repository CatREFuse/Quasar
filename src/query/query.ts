import engines from '../../public/engines.json';

interface Engine {
    title: String;
    iconName: String;
    urlPattern: String;
}

export function queryEngines(): Array<Engine> {
    return engines;
}
