import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GetUser } from '../services/getUser.service';
import { User } from '../services/user'
import { UserProfile } from '../services/userprofile'
import { Job } from '../services/Job'
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-root',
  template:
  `<input type="button" value="signup" (click)="signup()" />
  <input type="button" value="signin" (click)="signin()" />
  <input type="button" value="logout" (click)="logout()" />
  <input type="button" [value]="logged" (click)="islogedin()" />
  <input type="button" value=" Get User" (click)="getuser()" />
  <input type="button" value=" Insert Job" (click)="addJob()" />
    <router-outlet> </router-outlet>`

})
export class AppComponent {
  user;
  userprofil;
  job;
  logged = false;
  constructor(private userService: GetUser, private router: Router, private authservice: AuthService) {


  }
  signup() {
    this.user = new User(
      "ab", "ab", "ab"
    )

    this.userprofil = new UserProfile(
      "ab", "ab", "ab", "a", "a", "a", "a", new Date()
      , {
        country: "country",
        street: "street",
        state: "state",
        zipCode: "zipcode",
      }, "currentcarrierlevel", ["language", "language2"],
      [{
        school: "school",
        country: "country",
        field: "field",
        dirgee: "digree",
        year: "year",
      }], ["featuredskills1", "featuredskills2"], ["link1", "link2"], [{
        title: "title",
        company: "company",
        location: "location",
        startdate: new Date(),
        enddate: new Date(),
        description: "description",
      }], [{
        jobid: "job Id",
        applicationstatus: "app status ",
      }])
    this.authservice.signup(this.user, this.userprofil).subscribe(
      data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
        }
        //redirect to the profil page
        this.router.navigateByUrl('/');
      },
      error => console.log(error)
    );

  }
  signin() {
    this.user = new User(
      "ab", "ab", "ab"
    )
    console.log(this.user)
    this.authservice.signin(this.user).subscribe(
      data => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('userId', data.userId);
        }
        //redirect to the profil page
        this.router.navigateByUrl('/');
      },
      error => console.error(error)

    );
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['/']);
  }
  islogedin() {
    this.logged = localStorage.getItem('token') !== null;
    return localStorage.getItem('token') !== null;
  }
  getuser() {
    this.userService.getUser().subscribe(users => console.log(users));
  }

  //inserting jobs

  // addJob() {
  //   this.job = new Job(
  //     "id6", "1", "1", ["angular","node"], "ab", "ab", "ab", "ab", "ab",
  //     new Date(), new Date(), [{ id: "applican1", appliactiondate: new Date() }]
  //   )
  //   this.userService.addJob(this.job).subscribe(users => console.log(users));
  // }


}
