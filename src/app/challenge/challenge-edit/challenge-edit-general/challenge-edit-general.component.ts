import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from '../../to/Challenge';
import { Tag } from '../../to/Tag';

@Component({
  selector: 'app-challenge-edit-general',
  templateUrl: './challenge-edit-general.component.html',
  styleUrls: ['./challenge-edit-general.component.scss']
})
export class ChallengeEditGeneralComponent implements OnInit {

  @Input() challenge: Challenge = new Challenge();

  tags: Tag[] = [];
  filteredTags: Tag[] = [];

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.challengeService.findTags().subscribe(
      (res: Tag[]) => {
        this.tags = res;
        this.filterTags();
      }
    );
  }

  removeTag(tag: any): void {
    if (this.challenge.tags != null) {
      this.challenge.tags = this.challenge.tags.filter(item => item.id != tag.id);
      this.filterTags();
    }
  }

  addTag(event: MatAutocompleteSelectedEvent): void {
    console.log(event.option.value.id);
  }

  filterTags() {
    if (this.challenge == null || this.challenge.tags == null) {
      this.filteredTags = this.tags;
    }

    else {
      this.filteredTags = this.tags.filter(item => this.challenge.tags != null && this.challenge.tags.indexOf(item) < 0);
    }

  }


}
