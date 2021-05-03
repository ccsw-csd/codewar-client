import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCredentials } from '../../core/to/ResponseCredentials';
import { AuthService } from '../../core/services/auth.service';
import { Role } from '../../core/to/Role';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 

  constructor(private http: HttpClient,
    private authService: AuthService,) {}

  login(username: string, password: string): Observable<ResponseCredentials> {

    this.authService.clearCredentials();

    return this.http.post<ResponseCredentials>(
      environment.securityServer + '/authenticate',
      {username:username, password: password}
    );
  }

  getUserInfo(): Observable<Role> {
    return this.http.get<Role>(
      environment.server + '/user/'
    );
  }  

  putCredentials(res: ResponseCredentials) {
    this.authService.putTokenCredentials(res);
  }
  
}
