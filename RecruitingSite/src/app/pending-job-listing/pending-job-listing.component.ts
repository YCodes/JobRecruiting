import { Component, OnInit } from '@angular/core';
import { JobsByTags } from '../job-search/jobsearch.service'
import { Job } from '../model/Job'
import { LoginService } from '../login/login.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-pending-job-listing',
  templateUrl: './app.pendingjob.html',
  styles: []
})
export class PendingJobListingComponent implements OnInit {
  jobs;
  jobIds: string[] = [];
  private data;

  constructor(private jobbytagservice: JobsByTags, private router: Router,
    private loginservice: LoginService) { }

  ngOnInit() {

    this.loginservice.userprofile.jobsapplied.forEach(item => this.jobIds.push(item.jobid));
    
    // this.loginservice.jobs = [{
    //   id: "65",
    //   title: "Senior PHP/Java/UX Developer",
    //   position: "Senior Developer",
    //   skills: ["Java", "Hadoop", "Big Data"],
    //   experiencerequired: "3+ Years",
    //   employer: "string",
    //   location: "New York, NY",
    //   jobdescription: "you will be responsible for the development and augmentation of the software components which will be used to solve analytical problems of large enterprises. These components would implement complex algorithms while being highly scalable in a multi data source environment.",
    //   type: "Full Time",
    //   publicationdate: new Date(),
    //   enddate: new Date(),
    //   applicants: [{
    //     id: "0.389571915740494",
    //     appliactiondate: new Date()
    //   }]
    // }, {
    //   id: "75",
    //   title: "Senior .NET Developer",
    //   position: "Senior Developer",
    //   skills: ["Java", "Hadoop", "Big Data"],
    //   experiencerequired: "3+ Years",
    //   employer: "string",
    //   location: "New York, NY",
    //   jobdescription: "you will be responsible for the development and augmentation of the software components which will be used to solve analytical problems of large enterprises. These components would implement complex algorithms while being highly scalable in a multi data source environment.",
    //   type: "Full Time",
    //   publicationdate: new Date(),
    //   enddate: new Date(),
    //   applicants: [{
    //     id: "0.389571915740494",
    //     appliactiondate: new Date()
    //   }]
    // },
    // {
    //   id: "85",
    //   title: "Senior Mobile Application",
    //   position: "Senior Developer",
    //   skills: ["Java", "Hadoop", "Big Data"],
    //   experiencerequired: "3+ Years",
    //   employer: "string",
    //   location: "New York, NY",
    //   jobdescription: "you will be responsible for the development and augmentation of the software components which will be used to solve analytical problems of large enterprises. These components would implement complex algorithms while being highly scalable in a multi data source environment.",
    //   type: "Full Time",
    //   publicationdate: new Date(),
    //   enddate: new Date(),
    //   applicants: [{
    //     id: "0.389571915740494",
    //     appliactiondate: new Date()
    //   }]
    // }
    // ];
  
    this.jobs = this.loginservice.jobs.filter( (job) => this.jobIds.indexOf(job.id)>=0);
    this.data = this.jobs;


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
