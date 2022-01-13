import { Component, OnInit, ViewChild } from '@angular/core';
import { ChallengeEdit } from '../to/ChallengeEdit';
import {MatTableDataSource} from '@angular/material/table';
import { ChallengeService } from '../services/challenge.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Challenge } from '../to/Challenge';
import { ChallengeItemList } from '../to/ChallengeItemList';
import { EventData } from 'src/app/core/to/EventData';
import { Router } from '@angular/router';
import { DialogComponent } from 'src/app/core/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EnableChallengeComponent } from './enable-challenge/enable-challenge.component';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  challenges?: ChallengeItemList[];
  filter: string = "";
  isloading : boolean = false;

  constructor(
    private challengeService : ChallengeService,
    private router: Router,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.load();
  }

  load() : void {
    this.isloading = true;
    this.challengeService.findMyChallenges().subscribe(
      (res) => {
        this.challenges = res;
        this.isloading = false;
      }
    );
  }

  receiveEvent($event : EventData<ChallengeItemList>) : void {
    
    let challenge : ChallengeItemList = $event.getData();

    if ($event.getAction() == 'delete')     this.delete(challenge);    
    else if ($event.getAction() == 'edit')  this.edit(challenge);
    else if ($event.getAction() == 'visualize')  this.edit(challenge);
    else if ($event.getAction() == 'enable')  this.enable(challenge);
    else if ($event.getAction() == 'finalize')  this.finalize(challenge);
    

  }

  private enable(challenge : ChallengeItemList) : void {
    const modalDialog = this.matDialog.open(EnableChallengeComponent, {
      height: "600px",
      width: "800px",
      data: {challenge: challenge}
    });

    modalDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.isloading = true;
        this.challengeService.activate(challenge.id).subscribe(res => {
          this.load();
        });
      }
    });
  }


  
  private finalize(challenge : ChallengeItemList) : void {
    const modalDialog = this.matDialog.open(DialogComponent, {
      height: "250px",
      width: "600px",
      data: {title: '¿Desea finalizar el reto?', description: 'Atención, una vez finalizado el reto, nadie podrá participar en él. ¿Está seguro que desea finalizar el reto "'+challenge.name+'"?'}
    });


    modalDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.isloading = true;
        this.challengeService.finalize(challenge.id).subscribe(res => {
          this.load();
        });
      }
    });
  }

  private delete(challenge : ChallengeItemList) : void {
    const modalDialog = this.matDialog.open(DialogComponent, {
      height: "250px",
      width: "600px",
      data: {title: '¿Desea borrar el reto?', description: 'Atención, si borra el reto ya no podrá recuperar la información. ¿Está seguro que desea borrar el reto "'+challenge.name+'"?'}
    });


    modalDialog.afterClosed().subscribe(result => {
      if (result == true) {

        this.isloading = true;
        this.challengeService.delete(challenge.id).subscribe(res => {
          this.load();
        });
      }
    });
  }

  private edit(challenge : ChallengeItemList) : void {
    this.router.navigate(['challenge-edit', challenge != null ? challenge.id : null]);
  }



}
