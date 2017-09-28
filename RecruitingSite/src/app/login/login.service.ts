import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "../model/user";
import { Job } from "../model/Job";
import { UserProfile } from "../model/userprofile";

@Injectable()
export class LoginService {
    userprofile: UserProfile;
    jobs: Job[];
    searchResult: Job[];
    tags: string[];
    constructor(private http: Http) { }

    signup(user: User, userprofile: UserProfile) {
        const body = JSON.stringify({ user: user, userprofile: userprofile });
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5000/signup', body, { headers: headers })
            .map((response: Response) => {
                var data = response.json();
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                }
                if (data.userprofile) {
                    this.userprofile = data.userprofile;
                }
                return data
            }
            ).catch((error: Response) => Observable.throw(error.json()))
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:5000/signin', body, { headers: headers })
            .map((response: Response) => {
                var data = response.json()
                if (data.token) {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('userId', data.userId);
                }
                if (data.userprofile) {
                    this.userprofile = data.userprofile;
                }
                return data;
            })
            .catch((error: Response) => Observable.throw(error));

    }

    getJobs() {
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';

        this.http.get('http://localhost:5000/jobs/list/' + token).subscribe(
            data => {
                this.jobs = data.json().jobs;
            }
        )
    }

    

    logout() {
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
    
}