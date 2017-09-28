import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { LoginService } from './login.service';
import { Job } from '../model/Job'

@Injectable()
export class GetUser {
    constructor(private auth: LoginService, private http: Http) { }

    getUser() {

        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
            return this.http.post('http://localhost:5000/jobs/apply/' + token, ['id1']);
            //Search job by tags
            //return this.http.post('http://localhost:5000/jobs/search/' + token, ["java", "test"]);
            //Apply for a job with the job id
            

    }

    //inserting jobs
    // addJob(job: Job) {
    //     console.log(job)
    //     const body = JSON.stringify(job);
    //     const headers = new Headers({ 'Content-Type': 'application/json' });
    //     return this.http.post('http://localhost:5000/jobs/search', job, { headers: headers })
    //     .map((response: Response) => response.json())
    //     .catch((error: Response) => Observable.throw(error));

    // }
}