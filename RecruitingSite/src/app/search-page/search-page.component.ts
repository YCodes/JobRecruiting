import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Job } from '../model/Job'

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: []
})
export class SearchPageComponent implements OnInit {
  private data;

  constructor(public loginservice : LoginService) { 
    this.data = this.loginservice.searchResult;

    
  }

  ngOnInit() {

    // this.data = [{
    //   id: "65",
    //   title: "Senior PHP/Java/UX Developer - Search",
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

  }

}
