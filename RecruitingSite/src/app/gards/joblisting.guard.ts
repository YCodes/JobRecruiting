import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Http, Headers, Response } from "@angular/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { LoginService } from '../login/login.service';
import { Job } from '../model/Job'

@Injectable()
export class JobListGuard implements CanActivate {

    constructor(private loginservice: LoginService, private router: Router, private http :Http) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        return true
    }

}