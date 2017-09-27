import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {LoginService} from '../login/login.service'

@Component({
  selector: 'app-profile',
  templateUrl: './app.profile.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  private senddata;
  constructor(private route: ActivatedRoute, private router: Router, public myservice : LoginService) { }

  ngOnInit() {  
    this.senddata =this.myservice.userprofile;
    console.log(this.senddata);
  // this.route
  //   .queryParams
  //   .subscribe((params) => {
  //      this.senddata = params;
  //      console.log(params);
  //   });
  }
}
