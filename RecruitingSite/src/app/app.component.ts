import { Component } from '@angular/core';
import { LoginService} from './login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Job Recruiting Site';
  private data;
  constructor(public loginserv: LoginService, private router: Router) { 
    this.router.navigate(['starter']);
   
  }

}


