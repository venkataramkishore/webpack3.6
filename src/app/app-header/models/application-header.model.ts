
import { BASIC_HEADERS } from "../basic-header-menu";
import { HeaderMenu } from "./header-menu.model";
/**
 * ApplicationHeader is used for the maintaining the application header menu.
 * Based on user role application headers will vary
 * @export ApplicationHeader
 * @class ApplicationHeader
 */
export class ApplicationHeader {

    private brand: string;
    private appHeaderMenu: HeaderMenu[];
    private userMenu: HeaderMenu[];

    /**
     * Creates an instance of ApplicationHeader.
     * By default uses the application static menu configured in basic-header-menu.json file
     * @memberof ApplicationHeader
     */
    constructor() {
        this.brand = BASIC_HEADERS.brand;
        BASIC_HEADERS.appMenu.forEach((item: any) => this.appHeaderMenu.push(
            new HeaderMenu(
                item.name, item.href, item.url, item.active, item.show, item.isAuthRequired, item.subMenu
            )
        )
        );
        BASIC_HEADERS.userMenu.forEach((item: any) => this.userMenu.push(
            new HeaderMenu(
                item.name, item.href, item.url, item.active, item.show, item.isAuthRequired, item.subMenu
            )
        )
        );
    }

    /**
     * Retrieve the Brand name as configured in basic-header-menu.json
     * @returns {string}
     * @memberof ApplicationHeader
     */
    public getBrand(): string {
        return this.brand;
    }

    /**
     * Application related menu.
     * By default defined in basic-header-menu.json
     * @returns {HeaderMenu[]}
     * @memberof ApplicationHeader
     */
    public getApplicationMenu(): HeaderMenu[] {
        return this.appHeaderMenu;
    }
    /**
     * User related menu.
     * By default defined in basic-header-menu.json
     * @returns {HeaderMenu[]}
     * @memberof ApplicationHeader
     */
    public getUserMenu(): HeaderMenu[] {
        return this.userMenu;
    }
}
