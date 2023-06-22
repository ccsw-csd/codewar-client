import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/admin-role/models/Challenge';

import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Tag } from 'primeng/tag';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeListComponent implements OnInit {

  public challenges: Challenge[];
  public tags: Tag[];

  statusChallenges = []; 

  constructor(
    private challengeService: ChallengeService,
    private router: Router,
  ) {

    this.statusChallenges['ACT']= 'active-card';
    this.statusChallenges['CLO']= 'finished-card';
    this.statusChallenges['PND']= 'pending-card';

   }

  ngOnInit(): void {

    this.challengeService.getChallenges().subscribe(
      challenges => this.challenges = challenges
    );
  }


  

  editChallenge(id: number) {
    if(id){
      this.router.navigate(['admin/challenge-edit/' + id]);
    }else{
      this.router.navigate(['admin/challenge-edit' ]);
    }
  }
}
