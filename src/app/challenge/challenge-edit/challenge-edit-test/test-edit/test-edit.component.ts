import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Test } from 'src/app/challenge/to/Test';

@Component({
  selector: 'app-test-edit',
  templateUrl: './test-edit.component.html',
  styleUrls: ['./test-edit.component.scss']
})
export class TestEditComponent implements OnInit {

  test : Test;

  constructor(
    public dialogRef: MatDialogRef<TestEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {test: Test}
  ) { 

    this.test = this.testClone(data.test);
  }

  ngOnInit(): void {
  }


  close() : void {
    this.dialogRef.close(null);
  }

  save() : void {
    this.dialogRef.close(this.test);
  }


  private testClone(test : Test) : Test {
    return new Test(test.name, this.deepClone(test.valueIn), this.deepClone(test.valueOut), test.visible, test.timeout);
  }

  private deepClone(obj : any) {
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
