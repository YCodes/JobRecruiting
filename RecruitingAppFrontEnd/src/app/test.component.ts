import { Component } from '@angular/core';
import { GetUser } from '../services/getUser.service';


@Component({
  selector: 'app-test',
  template://private userService: GetUser 
  `Hello !`

})
export class TestComponent  {
  user;
  constructor() {
   
  }
  getuser() {
   // this.userService.getUser().subscribe(users => console.log(this.user = users.json()[0]));
  }

}
