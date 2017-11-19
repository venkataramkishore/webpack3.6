import * as angular from "angular";
import { WelcomeComponent } from "./welcome.component";

angular.module("app.welcome", ["ui-router"])
    .component("welcome", new WelcomeComponent());
