import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../login/login.service'
import { JobsByTags } from '../job-search/jobsearch.service'
import { Job } from '../model/Job'

@Component({
  selector: 'app-profile',
  templateUrl: './app.profile.html',
  styles: []
})
export class ProfileComponent implements OnInit {
  jobs: Job[];
  private data;
  private senddata;
  constructor(private jobbytagservice: JobsByTags,private route: ActivatedRoute, private router: Router, public myservice: LoginService) {}

  ngOnInit() {
    this.senddata = this.myservice.userprofile;
    console.log(this.senddata.education[0].edu_school);
   
  }

  logSearchForm(value) {
    if (value.keyword) {
      var tags = value.keyword.split(/[\s,]+/);
      this.jobbytagservice.getJobsbyTags(tags).subscribe(
        jobs => {
          this.myservice.searchResult = jobs,
          this.router.navigate(['result']);
        },
        error => {
          //redirect to a friendly error page

        }

      )
    }
  }

  doLogout(){
    this.myservice.logout()
    this.router.navigate(['/login']);
  }

}
