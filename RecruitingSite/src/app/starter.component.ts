import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-starter',
    template: `
    <!-- <p><img src="../public/images/recruitment.jpg" height="400px" width="600px" alt="job_offer"></p> -->
    <img src="../assets/images/recruitment.jpg" height="400px" width="600px" alt="job_offer">
     <br><br>
    <a [routerLink]="['/login']"  id="front-login-btn"><button>Login</button></a>
    <a [routerLink]="['/register']" id="front-login-btn"><button>Register</button></a>`,
})
export class StarterComponent {

   

}


