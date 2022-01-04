interface Engine {
    id: number;
    title: string;
    iconName: string;
    command: string;
    loginRequire: number;
    urlPattern: string;
    tags: string;
}

class Engine implements Engine {
    id: number;
    title: string;
    iconName: string;
    command: string;
    loginRequire: number;
    urlPattern: string;
    tags: string;
    constructor(
        title: string,
        iconName: string,
        command: string,
        loginRequire: number,
        urlPattern: string,
        id: number,
        tags: string
    ) {
        this.id = id;
        this.title = title;
        this.iconName = iconName;
        this.command = command;
        this.loginRequire = loginRequire;
        this.urlPattern = urlPattern;
        this.tags = tags;
    }
}

export { Engine };
