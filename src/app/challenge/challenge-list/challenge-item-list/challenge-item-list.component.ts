import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EventData } from 'src/app/core/to/EventData';
import { ChallengeItemList } from '../../to/ChallengeItemList';

@Component({
  selector: 'app-challenge-item-list',
  templateUrl: './challenge-item-list.component.html',
  styleUrls: ['./challenge-item-list.component.scss']
})
export class ChallengeItemListComponent implements OnInit {

  @Input() challenge: ChallengeItemList | undefined;
  @Output() eventEmitter = new EventEmitter<EventData<ChallengeItemList>>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  public tags() : string[] {

    if (this.challenge.tagsName == null || this.challenge.tagsName.length == 0) return [];

    return this.challenge.tagsName.split(",");
  }

  public getColor(): string {
    let color: string;

    let status = '';
    if (this.challenge != null && this.challenge.statusCode != null) status = this.challenge.statusCode;

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

  public deleteChallenge() : void {
    this.eventEmitter.next(new EventData<ChallengeItemList>('delete', this.challenge));
  }

  public enableChallenge() :void {

  }

  public disableChallenge() : void {

  }

  public visualizeChallenge() : void {
    this.eventEmitter.next(new EventData<ChallengeItemList>('visualize', this.challenge));
  }

  public editChallenge() : void {
    this.eventEmitter.next(new EventData<ChallengeItemList>('edit', this.challenge));
  }

}
