import { Parameter } from "./Parameter";


export class TestValue {
    value : string = "";
    name : string = "";
    type : string = "";

    constructor(value?: string, parameter?: Parameter) {
        this.value = value;

        if (parameter != null) {
            this.name = parameter.name;
            this.type = parameter.type;
        }
    }
}
  