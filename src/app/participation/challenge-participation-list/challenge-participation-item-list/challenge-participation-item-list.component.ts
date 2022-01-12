import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/core/to/EventData';
import { ChallengeParticipationItemList } from '../../to/ChallengeParticipationItemList';

@Component({
  selector: 'app-challenge-participation-item-list',
  templateUrl: './challenge-participation-item-list.component.html',
  styleUrls: ['./challenge-participation-item-list.component.scss']
})
export class ChallengeParticipationItemListComponent implements OnInit {

  @Input() challenge: ChallengeParticipationItemList | undefined;
  @Output() eventEmitter = new EventEmitter<EventData<ChallengeParticipationItemList>>();
  constructor() { }

  ngOnInit(): void {
  }

  public tags(): string[] {

    if(this.challenge.tagsName == null || this.challenge.tagsName.length == 0) return[];

    return this.challenge.tagsName.split(",");
  }

  public participate() : void {
    this.eventEmitter.next(new EventData<ChallengeParticipationItemList>('participate', this.challenge));
  }
}
