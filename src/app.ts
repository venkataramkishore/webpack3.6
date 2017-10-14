import "bootstrap";
import * as $ from "jquery";
import "./style/index.scss";

class SimpleClass {

    public basicname: string;
    private appName: string;

    constructor() {
        this.appName = "Welcome kishore..!!";
        $("#myModal").modal("show");
    }

    public printInConsole(): void {
        console.log(this.appName);
        console.log("I am constructed and called successfully..!!");
        console.log("I have open question about running application..!?");
        console.log("Not anymore");
    }
}

new SimpleClass().printInConsole();
