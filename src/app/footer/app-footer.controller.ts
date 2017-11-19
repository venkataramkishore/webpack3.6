import * as moment from "moment";

export class AppFooterController {
    private currentDtTime: moment.Moment;

    constructor() {
        this.currentDtTime = moment();
    }

    public getCurrentDt(): string {
        return this.currentDtTime.format("dd-MMM-YYYY");
    }

    public getCurrentTime(): string {
        return this.currentDtTime.format("HH:mm:ss a Z");
    }
}
