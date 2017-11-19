import * as angular from "angular";
import "./vendor.ts";
// import { AppHeaderComponent } from "./app/app-header/app-header.component";
// import { AppFooterComponent } from "./app/footer/app-footer.component";
import "./app/welcome/welcome.module";
import { MainConfig } from "./main.config";

import "./app/style/index.scss";

angular.module("authentication-app", [
    "ui-router",
    "app.welcome"
])
    // .component("appHeader", new AppHeaderComponent())
    // .component("appFooter", new AppFooterComponent())
    .config(MainConfig);

// MAIN_MODULE.component("appHeader", AppHeaderComponent);
// MAIN_MODULE.component("appFooter", AppFooterComponent);
// MAIN_MODULE.config(MainConfig);
