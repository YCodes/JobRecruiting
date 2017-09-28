import { Component, OnInit, Output } from '@angular/core';
import { LoginService } from '../login/login.service';
import { JobsByTags } from '../job-search/jobsearch.service'
import { Job } from '../model/Job'
import { Router } from '@angular/router';
import { JobApply } from './jobapply.service';

@Component({
  selector: 'app-job-listing',
  templateUrl: './app.joblisting.html',
})



export class JobListingComponent implements OnInit {
  jobs: Job[];
  private data;
  

  constructor(private router: Router, private jobbytagservice: JobsByTags,
     private loginservice: LoginService, private jobapply : JobApply) {
    
    this.data = this.loginservice.jobs;
  }

  clicked(value){
    //console.log(value)
    this.jobapply.applyJob(value).subscribe(
      data => {
       // console.log(data)
        //this.router.navigate(['welcome']);
      },
      error => {
        console.log(error)
      }
    );
  }


  ngOnInit() {
    
  }


  logSearchForm(value) {
    if (value.keyword) {
      var tags = value.keyword.split(/[\s,]+/);
      this.jobbytagservice.getJobsbyTags(tags).subscribe(
        jobs => {
          this.loginservice.searchResult = jobs,
          this.router.navigate(['result']);
        },
        error => {
          //redirect to a friendly error page

        }
      )
    }
  }

}
