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

    public clone() : Test {
        return new Test(this.name, this.deepClone(this.valueIn), this.deepClone(this.valueOut), this.visible, this.timeout);
    }

    deepClone(obj : any) {
        var copy : any;
    
        // Handle the 3 simple types, and null or undefined
        if (null == obj || "object" != typeof obj) return obj;
    
        // Handle Date
        if (obj instanceof Date) {
            copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }
    
        // Handle Array
        if (obj instanceof Array) {
            copy = [];
            for (var i = 0, len = obj.length; i < len; i++) {
                copy[i] = this.deepClone(obj[i]);
            }
            return copy;
        }
    
        // Handle Object
        if (obj instanceof Object) {
            copy = {};
            for (var attr in obj) {
                if (obj.hasOwnProperty(attr)) copy[attr] = this.deepClone(obj[attr]);
            }
            return copy;
        }
    
        throw new Error("Unable to copy obj! Its type isn't supported.");
      }
}
  