import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Http, Headers, Response } from "@angular/http";
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { LoginService } from '../login/login.service';
import { Job } from '../model/Job'

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private loginservice: LoginService, private router: Router) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {

        //check the authentication state
        if (!this.loginservice.isLoggedIn()) {
            this.router.navigate(['/login']);
            return false;
        }

        return true
    }

}