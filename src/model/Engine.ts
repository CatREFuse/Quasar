interface Engine {
    title: string;
    iconName: string;
    command: string;
    loginRequire: boolean;
    urlPattern: string;
}

class Engine implements Engine {
    title: string;
    iconName: string;
    command: string;
    loginRequire: boolean;
    urlPattern: string;
    constructor(
        title: string,
        iconName: string,
        command: string,
        loginRequire: boolean,
        urlPattern: string
    ) {
        this.title = title;
        this.iconName = iconName;
        this.command = command;
        this.loginRequire = loginRequire;
        this.urlPattern = urlPattern;
    }
}

export { Engine };
