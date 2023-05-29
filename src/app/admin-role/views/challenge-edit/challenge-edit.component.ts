import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from 'src/app/core/models/Challenge';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  public challenge: Challenge;

  constructor(private router: Router,
    private challengeService: ChallengeService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const challengeId = param['id'];
      this.challengeService.getChallengeById(challengeId).subscribe(
        challenge => this.challenge = challenge
      );
    });
  }

  goBack() {
    this.router.navigate(['admin/challenge-list']);
  }
}
