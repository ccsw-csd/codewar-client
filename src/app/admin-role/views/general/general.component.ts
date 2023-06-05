import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Challenge } from 'src/app/core/models/Challenge';
import { Tag } from 'src/app/core/models/Tag';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeEdit } from 'src/app/core/models/ChallengeEdit';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit{

  listTags: Tag[] = [];
  selectedTags: Tag[] = [];

  @Input() challenge: Challenge;
  @Input() filterForm: FormGroup;
  @Input() tags: Tag;
  @Input() challengeEdit: ChallengeEdit;

  constructor(private challengeService: ChallengeService) { }

  ngOnInit(): void {
    this.getAllTags();
  }

  getAllTags(){
    this.challengeService.getAllTags().subscribe({
      next: data => {
        this.listTags = data;
      },
      error: () => {},
      complete: () => {}
    });
  }  

  onChangeTag(event: any) {
    const selectedTag = event.value;
    if (selectedTag && !this.selectedTags.includes(selectedTag)) {
      this.selectedTags.push(selectedTag);
    }
  }

  removeTag(tag: Tag) {
    const index = this.selectedTags.indexOf(tag);
    if (index !== -1) {
      this.selectedTags.splice(index, 1);
    }
  }
}
