import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Editor } from 'ngx-editor';
import { ChallengeParticipationItemList } from '../../to/ChallengeParticipationItemList';

@Component({
  selector: 'app-challenge-info',
  templateUrl: './challenge-info.component.html',
  styleUrls: ['./challenge-info.component.scss']
})
export class ChallengeInfoComponent implements OnInit, OnDestroy {

  challenge: ChallengeParticipationItemList;
  descriptor: Editor;

  constructor(
    public dialogRef: MatDialogRef<ChallengeInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {challenge: ChallengeParticipationItemList}
  ) { 
    this.challenge = data.challenge;
  }

  ngOnDestroy(): void {
    this.descriptor.destroy();
  }

  ngOnInit(): void {
    this.descriptor = new Editor({      
    });
  }

  public tags(): string[] {

    if(this.challenge.tagsName == null || this.challenge.tagsName.length == 0) return[];

    return this.challenge.tagsName.split(",");
  }

  yes() : void {
    this.dialogRef.close(true);
  }

  no() : void {
    this.dialogRef.close(false);
  }

}
