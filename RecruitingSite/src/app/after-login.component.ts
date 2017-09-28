import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styles: []
})
export class AfterLoginComponent implements OnInit {
  title = 'Job Recruiting Site';
  constructor(private router: Router) {
    this.router.navigate(['joblist']);
   }

  ngOnInit() {
  }

}
