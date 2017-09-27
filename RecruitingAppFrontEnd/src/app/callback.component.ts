import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  template: ` Hello from call back`
})
export class CallbackComponent {

  constructor(private authService: AuthService) {
    console.log('call back')
    //this.authService.;
  }
}