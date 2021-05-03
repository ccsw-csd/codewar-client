import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SnackbarService } from '../services/snackbar.service';
import { UserService } from '../services/user.service';
import { User } from '../to/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user : User;
  isLoading : boolean = false;
  

  constructor(
    private dialogRef: MatDialogRef<UserEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private userService: UserService,
    private snackbarService: SnackbarService,
    private router: Router,
  ) {

    this.user = data.user;
    if (this.user.id == null) {
      let username = this.authService.getUsername();
      if (username != null)
        this.user.username = username;

      this.user.dateCreation = new Date();
      this.user.mail = this.user.username+"@capgemini.com";
    }
   }

  ngOnInit(): void {
  }

  isValid(): boolean {

    return this.user.firstName != null && this.user.firstName != ""
      && this.user.lastName != null && this.user.lastName != ""
      && this.user.mail != null && this.user.mail != "";
  }

  save() : void {
    this.isLoading = true;
    
    this.userService.save(this.user).subscribe(
      (res: User) => {
        this.isLoading = false;
        window.location.reload();
      },
      () => {
        this.isLoading = false;
        this.snackbarService.error('Error al registrar al usuario. Vuelva a intentarlo en unos momentos.');
      }
    );

  }

}
