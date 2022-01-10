import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../to/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  save(user: User): Observable<User> {

    return this.http.post<User>(
      environment.server + '/user/',
      user
    );
  }

  getUserByUsername(username: String): Observable<User> {
    return this.http.get<User>(
      environment.server + '/user/get/' + username,
    );
  }

}
