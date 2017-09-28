import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { UserProfile } from '../model/userprofile';

@Injectable()
export class LoginService {
  userprofile: UserProfile;
  logindetails;
  constructor(public http: Http) { }

  
  verifyLogin() {
    this.http.get('http://localhost:5000/verifylogin').subscribe(
      data => { this.logindetails = data },
    );
    return this.logindetails;
  }

}
