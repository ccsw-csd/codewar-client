export class EventData<T> {
    action: string;
    data: T;

    constructor(action: string, data: T) {
        this.action = action;
        this.data = data;
    }

    public getAction() : string {
        return this.action;
    };

    public getData() : T {
        return this.data;
    }
}