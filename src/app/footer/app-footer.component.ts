import * as angular from "angular";
import { AppFooterController } from "./app-footer.controller";

export class AppFooterComponent implements angular.IComponentOptions {

    public controller: any;
    public controllerAs: string;
    public templateUrl: string;

    constructor() {
        this.controller = AppFooterController;
        this.controllerAs = "$ctrl";
        this.templateUrl = "./app-footer.html";
    }

}
