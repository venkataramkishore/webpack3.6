import { WelcomeController } from "./welcome.controller";
import * as angular from "angular";

export class WelcomeComponent implements angular.IComponentOptions {

    public controller: any;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = WelcomeController;
        this.controllerAs = "$ctrl";
        this.templateUrl = "./welcome.html";
    }

}
