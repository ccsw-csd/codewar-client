import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeEdit } from 'src/app/admin-role/models/ChallengeEdit';
import { FormBuilder } from '@angular/forms';
import { ChallengeService } from '../../services/challenge.service';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge: ChallengeEdit = new ChallengeEdit();

  constructor(private router: Router,
    private challengeService: ChallengeService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const challengeId = param['id'];

      if (challengeId !== undefined) {
        this.challengeService.getChallengeById(challengeId).subscribe(
          challenge => this.challenge = challenge
        );
      }
    });
  }

  goBack() {
    this.router.navigate(['admin/challenge-list']);
  }
}
