import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../../services/challenge.service';
import { Challenge } from 'src/app/core/models/Challenge';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Tag } from 'src/app/core/models/Tag';
import { ChallengeEdit } from 'src/app/core/models/ChallengeEdit';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge: Challenge = new Challenge();
  filterForm: FormGroup;
  tags: Tag = new Tag();
  listTags: Tag[] = [];
  selectedTags: Tag[] = [];
  challengeEdit: ChallengeEdit = new ChallengeEdit();

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

    this.filterForm = this.formBuilder.group({
      name: [''],
      createdDate: [''],
      endDate: [''],
      tries: [''],
      statusId: ['']
    });
    
    this.getAllTags();
  }

  goBack() {
    this.router.navigate(['admin/challenge-list']);
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
