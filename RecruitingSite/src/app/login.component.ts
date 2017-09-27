import { Component, OnInit } from '@angular/core';
import { LoginService} from './login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from './model/user';

@Component({
  selector: 'app-login',
  templateUrl: './app.login.html',
  styleUrls: ['./app.component.css']
})
export class LoginComponent implements OnInit {

  private user;
  constructor(private router: Router, public loginserv: LoginService) { }

  ngOnInit() {
  }

  // doLogin(){
  //     // alert("Login Clicked...!");
  //     //console.log(this.loginserv.verifyLogin());
  //     this.router.navigateByUrl('/joblist');
  // }

  logSigninForm(value: any){
    this.user = new User("11", value.username, value.password);
    if(value.username==="Yaman" && value.password==="Yaman"){
      this.router.navigateByUrl('/welcome');
    } else {
      alert("Incorrect Credentials...!");
    }
    // console.log(this.user.getUser());
  }

}
