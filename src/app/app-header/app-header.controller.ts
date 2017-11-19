
import * as angular from "angular";
import { ApplicationHeader } from "./models/application-header.model";

/**
 *
 * Controller for the Application header, Manage header menu based on user authentication state of application
 * @export AppHeaderController
 * @class AppHeaderController
 */
export class AppHeaderController {

    private isAuth: boolean = false;
    private user: object = undefined;
    private appHeaders: ApplicationHeader = undefined;

    constructor() {
        "ngInject";
        this.appHeaders = new ApplicationHeader();
    }

    public validAuthUser(): boolean {
        return angular.isDefined(this.isAuth) && this.isAuth;
    }

    public loggedInUser(): object {
        return this.user;
    }

    public applicationHeaders(): ApplicationHeader {
        return this.appHeaders;
    }
}
