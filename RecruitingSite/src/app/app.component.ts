import { Component } from '@angular/core';
import { VerifyLoginService } from './verify-login/verify-login.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job Recruiting Site';
  constructor(private myservice: VerifyLoginService) { }
  getuser() {
    console.log(this.myservice.getData());
  }

}


