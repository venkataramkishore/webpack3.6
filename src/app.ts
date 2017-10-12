import './style/index.scss';

class SimpleClass {

    public basicname: string;
    private appName: string;

    constructor() {
        this.appName = 'Webpack 3.6 with typescript application name';
    }

    printInConsole(): void {
        console.log(this.appName);
        console.log('I am constructed and called successfully..!!');
    }
}

new SimpleClass().printInConsole();