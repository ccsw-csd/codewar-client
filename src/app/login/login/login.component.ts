import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ResponseCredentials } from '../../core/to/ResponseCredentials';
import { SnackbarService } from 'src/app/core/services/snackbar.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: string = "";
  password: string = "";

  isloading : boolean = false;

  constructor(
    private authService: AuthService,
    private loginService: LoginService,
    private router: Router,
    private snackbarService: SnackbarService,
  ) {}

  ngOnInit() {

    if (this.authService.isTokenValid()) {
      this.router.navigate(['dashboard']);
    }
  }

  login() {

    if (this.user == "") return;
    if (this.password == "") return;

    this.isloading = true;

    this.loginService.login(this.user, this.password).subscribe(
      (res: ResponseCredentials) => {
        this.loginService.putCredentials(res);
        this.router.navigate(['dashboard']);
      },
      () => {

        this.snackbarService.error('Credenciales incorrectas.');
        this.isloading = false;
      }
    );

  }
}
