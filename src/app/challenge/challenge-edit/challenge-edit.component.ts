import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { ChallengeService } from '../services/challenge.service';
import { ChallengeEdit } from '../to/ChallengeEdit';
import { Parameter } from '../to/Parameter';
import { Test } from '../to/Test';
import { TestValue } from '../to/TestValue';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge : ChallengeEdit;
  challengeId : null;
  isloading : boolean = false;

  constructor(
      private route: ActivatedRoute, 
      private challengeService : ChallengeService,
      private matDialog: MatDialog,
      private router: Router,
      ) { 

    this.challenge = new ChallengeEdit();
    this.challenge.outParameter = {name:'out', type: 'String'};
    this.challenge.inParameter = [{name:null, type: null}];

  }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      if (params != null && params['id'] != null) {
        this.challengeId = params['id']; 

        this.load();
      }
   });
  }

  load() : void {
    this.isloading = true;

    if (this.challengeId != null) {
      this.challengeService.get(this.challengeId).subscribe((data) => {
        this.challenge = data;
        this.isloading = false;            
      });
    }      

  }


  save() : void {
    this.isloading = true;
    this.challengeService.save(this.challengeId, this.challenge).subscribe((data) => {
      this.load();
    });
  }

  close() : void {
    const modalDialog = this.matDialog.open(DialogComponent, {
      height: "250px",
      width: "600px",
      data: {title: '¿Desea cerrar la edición?', description: 'Atención, si ha realizado cambios y no los ha guardado se perderá esa información. ¿Está seguro que desea cerrar la edición?'}
    });


    modalDialog.afterClosed().subscribe(result => {
      if (result == true)
        this.router.navigate(['challenge-list']);
        
    });
  }

}
