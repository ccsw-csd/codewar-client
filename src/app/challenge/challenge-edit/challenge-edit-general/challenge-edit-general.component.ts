import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  @ViewChild('tagInput', { static: false }) 
  tagInput: ElementRef<HTMLInputElement> | undefined;
  tagCtrl = new FormControl();

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

    let option = this.tags.find(
      option => option.id === event.option.value.id
    );

    if (this.challenge.tags == null) {
      this.challenge.tags = [];
    }

    if (option != null) {
      this.challenge.tags.push(option);
      this.filterTags();
    }

    if (this.tagInput != null) {
      this.tagInput.nativeElement.value = '';
      this.tagCtrl.setValue(null);
      this.tagInput.nativeElement.blur();
    }

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
