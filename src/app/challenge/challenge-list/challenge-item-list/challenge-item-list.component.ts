import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Challenge } from '../../to/Challenge';

@Component({
  selector: 'app-challenge-item-list',
  templateUrl: './challenge-item-list.component.html',
  styleUrls: ['./challenge-item-list.component.scss']
})
export class ChallengeItemListComponent implements OnInit {

  @Input() challenge: Challenge | undefined;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }


  public getColor(): string {
    let color: string;

    let status = '';
    if (this.challenge != null && this.challenge.status != null) status = this.challenge.status.code;

    switch (status) {
      case 'ACT':
        color = '#4BB543';
        break;
      case 'PND':
        color = '#FFA500';
        break;
      default:
        color = '#E0E0E0';
        break;
    }

    return color;
  }

  public activateChallengeDialog() :void {

  }

  public disableChallengeDialog() : void {

  }

  public visualizeChallenge() : void {
    this.router.navigate(['challenge-edit', this.challenge != null ? this.challenge.id : null]);
  }

  public editChallenge() : void {
    this.router.navigate(['challenge-edit', this.challenge != null ? this.challenge.id : null]);
  }

}
