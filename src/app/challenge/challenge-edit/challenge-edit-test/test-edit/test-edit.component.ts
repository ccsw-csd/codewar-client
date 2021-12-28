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

    this.test = data.test.clone();
  }

  ngOnInit(): void {
  }


  close() : void {
    this.dialogRef.close(null);
  }

  save() : void {
    this.dialogRef.close(this.test);
  }


}
