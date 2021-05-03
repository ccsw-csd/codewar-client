import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../to/User';

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

  logout() {
    this.authService.logout();
  }
}
