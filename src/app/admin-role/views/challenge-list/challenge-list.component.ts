import { Component, OnInit } from '@angular/core';
import { Challenge } from 'src/app/admin-role/models/Challenge';

import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Tag } from 'primeng/tag';
import { Status } from 'src/app/core/models/Status';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChallengeListComponent implements OnInit {

  originalChallenges: Challenge[];

  challenges: Challenge[];

  statusChallenges = []; 

  statuses: Status[];

  selectedStatuses: Status[];

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
      challenges => {
        this.challenges = challenges;
        this.originalChallenges = challenges;
      }
    );

    this.statuses = [
      { id: 1, name: 'Activo', code: 'ACT' },
      { id: 2, name: 'Finalizado', code: 'CLO' },
      { id: 3, name: 'Pendiente', code: 'PND' }
    ];
  }

  filterList(){
    const codes: string[] = this.selectedStatuses.map((status: Status) => status.code);
    if (codes.length){
      this.challenges = this.originalChallenges.filter((challenge: Challenge) => codes.includes(challenge.status.code));
    }
    else
    {
      this.challenges = this.originalChallenges
    }
  }
  

  editChallenge(id: number) {
    if(id){
      this.router.navigate(['admin/challenge-edit/' + id]);
    }else{
      this.router.navigate(['admin/challenge-edit' ]);
    }
  }
}
