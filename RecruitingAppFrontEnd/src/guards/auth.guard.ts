import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';

// Import our authentication service
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {
    
  }

  canActivate() {
    if (!this.auth.isLoggedIn) {
      console.log('from the guard')
      this.router.navigate(['error']);
      return false;
    }
    return true;
  }

}