import { TestValue } from "./TestValue";


export class Test {
    name : string = "";
    valueIn : TestValue[];
    valueOut: TestValue;
    visible: boolean = true;
    timeout?: number = 1000;

    constructor(name: string, valueIn: TestValue[], valueOut: TestValue, visible: boolean, timeout?: number) {
        this.name = name;
        this.valueIn = valueIn;
        this.valueOut = valueOut;
        this.visible = visible;
        this.timeout = timeout;
    }
}
  