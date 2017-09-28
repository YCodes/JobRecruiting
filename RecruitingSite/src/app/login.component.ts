import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './model/user';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent {

  private user;
  constructor(private router: Router, public loginserv: LoginService) { }



  logSigninForm(value: any) {
    this.user = new User("0", value.username, value.password);

    this.loginserv.signin(this.user).subscribe(
      data => {
        this.router.navigate(['welcome']);
      },
      error => {
        console.log(error)
      }
    );
    this.loginserv.getJobs()
  }


}
