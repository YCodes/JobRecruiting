import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class VerifyLoginService {
  loginData;
  constructor(public http: Http) { }

  getData(){
    this.http.get("http://localhost:5000/logindetails").subscribe(data => this.loginData = data);
    return this.loginData;
  }

}
