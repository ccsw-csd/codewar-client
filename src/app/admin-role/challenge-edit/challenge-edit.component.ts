import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallengeService } from '../services/challenge.service';
import { Challenge } from 'src/app/core/models/Challenge';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Tag } from 'src/app/core/models/Tag';
import { ChallengeEdit } from 'src/app/core/models/ChallengeEdit';

@Component({
  selector: 'app-challenge-edit',
  templateUrl: './challenge-edit.component.html',
  styleUrls: ['./challenge-edit.component.scss']
})
export class ChallengeEditComponent implements OnInit {

  challenge: Challenge = new Challenge()
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
          challenge => this.challengeEdit = challenge
        );
      }
    });

    this.filterForm = this.formBuilder.group({
      name: ['', Validators.required],
      createdDate: [''],
      endDate: [''],
      tries: [''],
      statusId: [''],
      className: ['', Validators.required],
      functionName: ['', Validators.required],
    });
  }

    goBack() {
      this.router.navigate(['admin/challenge-list']);
    }
}
