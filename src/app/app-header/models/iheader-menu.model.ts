import { HeaderMenu } from "./header-menu.model";

export interface IHeaderMenu {

    activateItem(activate: boolean): void;
    showItem(show: boolean): void;
    addItem(item: HeaderMenu): boolean;
    deleteItem(item: HeaderMenu): boolean;
}
