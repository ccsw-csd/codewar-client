import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { UserEditComponent } from '../user-edit/user-edit.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  close : boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    public dialog: MatDialog, 
    ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(response => { this.authService.putUserInfo(response.user); this.checkUserDetails();});
  }

  private checkUserDetails() : void {
    let user = this.authService.getUserInfo();

    if (user == null || user.id == null) {
      this.dialog.open(UserEditComponent, {
        width: '700px',
        disableClose: true,
        data: {user:user},
      });
    }
  }

}
