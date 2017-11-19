import { IHeaderMenu } from "./iheader-menu.model";

export class HeaderMenu implements IHeaderMenu {

    private name: string;
    private href: string;
    private url: string;
    private active: boolean;
    private show: boolean;
    private isAuthRequired: boolean;
    private subMenu: HeaderMenu[];

    constructor(name: string, href: string, url: string, active: boolean = false,
        // tslint:disable-next-line:align
        show: boolean = true, isAuthRequired: boolean, subMenu?: object[]) {

        this.name = name;
        this.href = href;
        this.url = url;
        this.active = active;
        this.show = show;
        this.isAuthRequired = isAuthRequired;
        this.initialiseSubmenu(subMenu);

    }

    public activateItem(activate: boolean): void {
        throw new Error(`activate : ${activate}`);
    }

    public showItem(show: boolean): void {
        throw new Error(`show : ${show}`);
    }

    public addItem(item: HeaderMenu): boolean {
        let added = false;
        try {
            this.subMenu.push(
                new HeaderMenu(
                    item.name, item.href, item.url, item.active, item.show, item.isAuthRequired, item.subMenu
                )
            );
            added = true;
        } catch (e) {
            added = false;
            throw new Error(e.toString());
        }
        return added;
    }

    public deleteItem(item: HeaderMenu): boolean {
        throw new Error(`item : ${item}`);
    }

    private initialiseSubmenu(subMenu: object[]): void {
        try {
            this.subMenu.forEach((item) => {
                this.subMenu.push(new HeaderMenu(
                    item.name, item.href, item.url, item.active, item.show, item.isAuthRequired, item.subMenu
                ));
            });
        } catch (error) {
            throw new Error(`subMenu : ${subMenu}`);
        }
    }
}
