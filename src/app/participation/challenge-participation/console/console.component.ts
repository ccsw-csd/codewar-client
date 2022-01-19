import { isNgTemplate } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CompilationResponse } from '../../to/CompilationResponse';
import { CompilationTestExecutionResponse } from '../../to/CompilationTestExecutionResponse';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.scss']
})
export class ConsoleComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ConsoleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CompilationResponse
  ) {

    let checkTest = data.testExecutionResult.filter(item => item.performance == false);
    let performanceTest = data.testExecutionResult.filter(item => item.performance == true);


    data.testExecutionResult = checkTest.concat(performanceTest);

   }

  ngOnInit(): void {
  }

  close() : void {
    this.dialogRef.close();
  }

  testFail(test : CompilationTestExecutionResponse) : boolean {
    return test.testFail || test.testTimeout;
  }

  someTestFail() {
    let failTest = this.data.testExecutionResult.filter((test) => this.testFail(test));
    return failTest.length > 0;
  }

}
