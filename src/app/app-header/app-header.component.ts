import * as angular from "angular";
import { AppHeaderController } from "./app-header.controller";

export class AppHeaderComponent implements angular.IComponentOptions {

    public controller: any;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = AppHeaderController;
        this.controllerAs = "$ctrl";
        this.templateUrl = "./app-header.html";
    }

}
