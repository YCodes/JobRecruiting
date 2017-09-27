import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserProfile } from './model/userprofile';
import {LoginService} from './login/login.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: []
})
export class RegisterComponent implements OnInit {

  private userprofile;
  private userdata;
  constructor(private router: Router, public myservice : LoginService) { }

  ngOnInit() {

  }

  logForm(value: any){
    // console.log(value)
    this.userprofile = new UserProfile(
      "12",
      value.user,
      value.pass,
      value.email,
      value.first_name,
      value.last_name,
      value.phone,
      value.dob,
      value.address,
      value.career_level,
      value.language,
      value.education,
      value.featured_skills,
      value.links,
      value.professional_experience

    );
    
    this.userdata = this.userprofile.getUserProfile();
    this.userdata = JSON.parse(this.userdata);
    //console.log(this.userdata);
    // console.log(this.userprofile.getUserProfile()); 
    this.myservice.userprofile =  this.userdata ;
    this.router.navigate(['/profile'] );
     
  }

}
