import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Tag } from 'src/app/core/models/Tag';
import { ChallengeService } from '../../../services/challenge.service';
import { ChallengeEdit } from 'src/app/admin-role/models/ChallengeEdit';
import { Dropdown } from 'primeng/dropdown';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit{

  listTags: Tag[] = [];

  @ViewChild('dropdownTags') dropdownTags: Dropdown;
  @Input() challenge: ChallengeEdit;

  constructor(private challengeService: ChallengeService) { 

  }
  
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
    if (selectedTag && !this.challenge.tags.includes(selectedTag)) {
      this.challenge.tags.push(selectedTag);
    }

    this.dropdownTags.updateSelectedOption(null);
  }

  removeTag(tag: Tag) {
    const index = this.challenge.tags.indexOf(tag);
    if (index !== -1) {
      this.challenge.tags.splice(index, 1);
    }
  }
}
