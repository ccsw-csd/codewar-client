import { Component, OnInit } from '@angular/core';
import { EventData } from 'src/app/core/to/EventData';
import { ChallengeParticipationService } from '../services/challenge-participation.service';
import { ChallengeParticipationItemList } from '../to/ChallengeParticipationItemList';

@Component({
  selector: 'app-challenge-participation-list',
  templateUrl: './challenge-participation-list.component.html',
  styleUrls: ['./challenge-participation-list.component.scss']
})
export class ChallengeParticipationListComponent implements OnInit {

  challenges?: ChallengeParticipationItemList[];
  isloading: boolean = false;

  constructor( 
    private challengeParticipationService: ChallengeParticipationService,
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

    if ($event.getAction() == 'participate')     this.participate(challenge);   

  }

  participate(challenge: ChallengeParticipationItemList): void {

  }

}
