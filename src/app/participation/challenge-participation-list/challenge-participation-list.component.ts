import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventData } from 'src/app/core/to/EventData';
import { ParticipationService } from '../services/participation.service';
import { ChallengeParticipationItemList } from '../to/ChallengeParticipationItemList';
import { ChallengeInfoComponent } from './challenge-info/challenge-info.component';

@Component({
  selector: 'app-challenge-participation-list',
  templateUrl: './challenge-participation-list.component.html',
  styleUrls: ['./challenge-participation-list.component.scss']
})
export class ChallengeParticipationListComponent implements OnInit {

  challenges?: ChallengeParticipationItemList[];
  isloading: boolean = false;

  constructor( 
    private challengeParticipationService: ParticipationService,
    private router: Router,
    private matDialog: MatDialog,
  ) { }

  ngOnInit(): void {

    this.load();
  }

  load(): void {
    this.isloading = true;
    this.challengeParticipationService.findActiveChallenges().subscribe(
      (res) => {
        this.challenges = res;
        this.isloading = false;
    });
  }

  receiveEvent($event : EventData<ChallengeParticipationItemList>) : void {
    
    let challenge : ChallengeParticipationItemList = $event.getData();

    if ($event.getAction() == 'participate') this.participate(challenge);   

  }

  participate(challenge: ChallengeParticipationItemList): void {
    const modalDialog = this.matDialog.open(ChallengeInfoComponent, {
      width: "1000px",
      height: "800px",
      data: {challenge : challenge}
    });

    
    modalDialog.afterClosed().subscribe(result => {
      if (result == true) {
        this.router.navigate(['challenge-participation/'+challenge.id]);
      }
    });    
  }

}
