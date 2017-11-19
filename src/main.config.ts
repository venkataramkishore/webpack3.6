import * as angular from "angular";
import { welcomeState } from "./app/welcome/welcome.state";

export class MainConfig {

    private $uiRouterProvider: angular.ui.IUrlRouterProvider;
    private $stateProvider: angular.ui.IStateProvider;

    constructor($stateProvider: angular.ui.IStateProvider, $uiRouterProvider: angular.ui.IUrlRouterProvider) {
        "ngInject";

        this.$uiRouterProvider = $uiRouterProvider;
        this.$stateProvider = $stateProvider;

        this.$stateProvider.state("welcome", welcomeState);
        // Default setup to go to welcome state
        this.$uiRouterProvider.otherwise("welcome");
    }

}
