import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from "@angular/router";
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { JobListingComponent } from './job-listing/job-listing.component';

import { LoginService } from './login/login.service';
import { LoginComponent } from './login.component';
import { RegisterComponent } from './register.component';
import { StarterComponent } from './starter.component';
import { AfterLoginComponent } from './after-login.component';
import { PendingJobListingComponent } from './pending-job-listing/pending-job-listing.component';
import { ProfileComponent } from './profile/profile.component';


const MY_ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: 'starter', component: StarterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'welcome', component: AfterLoginComponent},  
  {path: 'joblist', component: JobListingComponent},
  {path: 'pending', component: PendingJobListingComponent},
  {path: 'profile', component: ProfileComponent},
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    JobListingComponent,
    LoginComponent,
    RegisterComponent,
    StarterComponent,
    AfterLoginComponent,
    PendingJobListingComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(MY_ROUTES), FormsModule
  ],
  providers: [ LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
