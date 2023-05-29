import { Component } from '@angular/core';
import { Challenge } from 'src/app/core/models/Challenge';
import { ChallengeService } from '../../services/challenge.service';
import { ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChallengeListComponent {

  public challenges: Challenge[];

  statusChallenges = ['active-card', 'finished-card', 'pending-card']; 

  constructor(
    private challengeService: ChallengeService,
    private router: Router,
  ) { }

  ngOnInit(): void {

    this.challengeService.getChallenges().subscribe(
        challenges => this.challenges = challenges
    );
  }

  editChallenge() {
    this.router.navigate(['admin/challenge-edit/' ]);
  }
}
