import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './model/userprofile';
import { User } from './model/user';
import { LoginService } from './login/login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  private userprofile;
  private userprofil1;
  private userdata;
  private user;
  constructor(private router: Router, public loginservice: LoginService) { }

  ngOnInit() {

  }

  logForm(value: any) {

    // Retrieve the data from the view

    this.user = new User(`${Math.random()}`,
      value.user,
      value.pass)

    this.userprofile = new UserProfile(
      `${Math.random()}`,
      value.user,
      value.email,
      value.first_name,
      value.last_name,
      value.phone,
      value.dob,
      value.address,
      value.career_level,
      [value.featured_skills],
      [value.language],
      [value.links],
      [value.education],
      [value.professional_experience],
      [{ jobid: '', applicationstatus: '' }]
    );

    this.loginservice.signup(this.user, this.userprofile).subscribe(
      data => {
        this.router.navigate(['/profile']);
      },
      error => {
        //Use Error Friendly Page
        //this.router.navigate(['/error',err]);
        console.log(error)
      }
    );

  }

}
