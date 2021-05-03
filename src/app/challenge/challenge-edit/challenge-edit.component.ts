import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from '../to/Challenge';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge : Challenge = new Challenge();

  constructor(private route: ActivatedRoute, 
      private challengeService : ChallengeService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      let id : number = +params['id']; 

      if (id != null) {
        this.challengeService.get(id).subscribe((data) => {
          this.challenge = data;
        });
      }      
   });
   

  }

}
