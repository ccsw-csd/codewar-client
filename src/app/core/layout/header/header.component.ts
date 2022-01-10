import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';
import { User } from '../../to/User';
import { UserEditComponent } from '../../user-edit/user-edit.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  user : User | null = null;
  navOpen = true;
  @Output() navOpenEvent = new EventEmitter();

  constructor(
    public authService: AuthService,
    public dialog: MatDialog,
    public userService: UserService,
    //private globalEvents: GlobalEvents
  ) {}

  ngOnInit() {

    this.user = this.authService.getUserInfo();


  }

  toggleSideNav() {
    //this.globalEvents.navOpen = !this.globalEvents.navOpen;
    this.navOpen = !this.navOpen;
    this.navOpenEvent.emit(this.navOpen);
  }

  getName() : string {
    if (this.user == null) return "";

    let name : string = this.user.firstName;
    if (this.user.lastName != null) name += " " + this.user.lastName;

    return name;
  }

  edit() {
    this.userService.getUserByUsername(this.user.username).subscribe( (res: User) => {
      const dialogRef = this.dialog.open(UserEditComponent, {
        data: { user: res}
      });
    });
  }
  
  logout() {
    this.authService.logout();
  }
}
