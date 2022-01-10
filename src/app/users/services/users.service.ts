import { Injectable } from '@angular/core';
import { UserItemList } from '../to/UserItemList';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/core/to/User';
import { UserService } from 'src/app/core/services/user.service';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url: String = '/user/';
  
  constructor(
    private http: HttpClient,
    private userService: UserService,

  ) { }

  findList(): Observable<UserItemList[]> {

    return this.http.get<UserItemList[]>(
      environment.server + this.url + 'list'
    );
  }


  findUsersByFilter(filter: String): Observable<UserItemList[]> {

    return this.http.get<UserItemList[]>(
      environment.server + this.url + filter);
  }

  updateUserRole(username: String, role: String): any {
    return this.http.post<any>(
      environment.server + this.url + username +'/' + role, "");
  }
}
