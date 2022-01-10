import { Injectable } from '@angular/core';
import { ListUser } from '../to/ListUser';
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

  getUsers(): Observable<ListUser[]> {

    return this.http.get<ListUser[]>(
      environment.server + this.url + 'list'
    );
  }


  getUsersByFilter(filter: String): Observable<ListUser[]> {

    return this.http.get<ListUser[]>(
      environment.server + this.url + filter);
  }

  update(user: ListUser): any {
    return this.http.post<any>(
      environment.server + '/user/role',user);
  }
}
