import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChallengeService } from '../../services/challenge.service';
import { ChallengeItemList } from '../../to/ChallengeItemList';

@Component({
  selector: 'app-enable-challenge',
  templateUrl: './enable-challenge.component.html',
  styleUrls: ['./enable-challenge.component.scss']
})
export class EnableChallengeComponent implements OnInit {

  challenge: ChallengeItemList;
  isloading : boolean = false;
  errors : string = "";
  valid : boolean = true;

  constructor(
    public dialogRef: MatDialogRef<EnableChallengeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {challenge: ChallengeItemList},
    private challengeService : ChallengeService,
  ) {
    this.challenge = data.challenge;
   }

  ngOnInit(): void {

    this.isloading = true;
    this.valid = true;
    this.errors = "";

    this.challengeService.check(this.challenge.id).subscribe(
      response => {

        this.valid = response.valid == true;

        if (this.valid == false) {
          this.errors = '\n - '+response.errors.join('\n - ');
        } else {
          this.errors = '\nEl reto ha sido validado correctamente.\n\n\n\nPuede activar el reto pulsando el botón "Activar".';
        }


        this.isloading = false;
      }
    );

  }

  yes(): void {
    this.dialogRef.close(true);
  }

  no() : void {
    this.dialogRef.close(false);
  }

}
