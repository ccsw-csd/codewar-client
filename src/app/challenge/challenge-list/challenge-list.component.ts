import { Component, OnInit, ViewChild } from '@angular/core';
import { Challenge } from '../to/Challenge';
import {MatTableDataSource} from '@angular/material/table';
import { ChallengeService } from '../services/challenge.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-challenge-list',
  templateUrl: './challenge-list.component.html',
  styleUrls: ['./challenge-list.component.scss']
})
export class ChallengeListComponent implements OnInit {

  challenges?: Challenge[];
  filter: string = "";

  constructor(
    private challengeService : ChallengeService,
  ) { }

  ngOnInit(): void {

    this.challengeService.findMyChallenges().subscribe(
      (res: Challenge[]) => {
        this.challenges = res;
      }
    );


  }

}
