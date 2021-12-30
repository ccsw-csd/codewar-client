import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { EventData } from 'src/app/core/to/EventData';
import { ChallengeEdit } from '../../to/ChallengeEdit';
import { Test } from '../../to/Test';
import { TestValue } from '../../to/TestValue';
import { TestEditComponent } from './test-edit/test-edit.component';

@Component({
  selector: 'app-challenge-edit-test',
  templateUrl: './challenge-edit-test.component.html',
  styleUrls: ['./challenge-edit-test.component.scss']
})
export class ChallengeEditTestComponent implements OnInit {

  @Input() challenge: ChallengeEdit = new ChallengeEdit();

  constructor(
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  receiveEvent($event : EventData<Test>) : void {
    
    let test : Test = $event.getData();

    if ($event.getAction() == 'delete')     this.deleteTest(test);    
    else if ($event.getAction() == 'edit')  this.editTest(test);

  }

  deleteTest(test : Test) {
    const modalDialog = this.matDialog.open(DialogComponent, {
      height: "250px",
      width: "600px",
      data: {title: '¿Desea borrar la prueba?', description: 'Atención, si borra la prueba ya no podrá recuperar la información. ¿Está seguro que desea borrar la prueba?'}
    });


    modalDialog.afterClosed().subscribe(result => {
      if (result == true)
        this.challenge.test = this.challenge.test.filter(item => item !== test);        
    });
  }

  editTest(test? : Test) {

    let isNew : boolean = false;

    if (test == null) {
      isNew = true;
      let outValue = new TestValue('', this.challenge.outParameter);
      
      let inValue : TestValue[] = [];
      this.challenge.inParameter.forEach(item => {
        inValue.push(new TestValue('', item));
      })


      test = new Test(null, inValue, outValue, true, null);
    }

    const modalDialog = this.matDialog.open(TestEditComponent, {
      height: "700px",
      width: "1000px",
      data: {test: test}
    });


    modalDialog.afterClosed().subscribe(result => {

      console.log(result, test);

      if (result != null) {
        if (isNew) {
          this.challenge.test.push(result);
          console.log(this.challenge.test);
        }
        else {
          let index = this.challenge.test.findIndex(x => x == test);
          this.challenge.test[index] = result;
        }
      }


      
    });


  }
  
  getVisibleTest() : Test[] {
    return this.getTests(true);
  }

  getNoVisibleTest() : Test[] {
    return this.getTests(false);
  }

  private getTests(visible : boolean) {
    if (this.challenge.test == null) return [];
    return this.challenge.test.filter(item => item.visible == visible);

  }

}
