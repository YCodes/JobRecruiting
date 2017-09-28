import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Http, Headers, Response } from "@angular/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { LoginService } from '../login/login.service';
import { Job } from '../model/Job'

@Injectable()
export class JobApply {
    constructor(private loginservice: LoginService, private router: Router, private http: Http) { }

    applyJob(jobId) {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:5000/jobs/apply/' + token, [jobId])
            .map(
            data => {
                return data.json().jobs;
            },
            error => {
                //move to an error friendly page
                return error
            }
            )
    }

}