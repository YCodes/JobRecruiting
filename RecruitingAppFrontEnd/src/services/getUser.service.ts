import { Injectable } from '@angular/core';
import { User } from '../services/user';
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { AuthService } from '../services/auth.service';
import { Job } from '../services/Job'

@Injectable()
export class GetUser {
    constructor(private auth: AuthService, private http: Http) { }

    getUser() {

        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
            //Search job by tags
            //return this.http.post('http://localhost:5000/jobs/search/' + token, ["java", "test"]);
            //Apply for a job with the job id
            return this.http.post('http://localhost:5000/jobs/apply/' + token, ['id1']);

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