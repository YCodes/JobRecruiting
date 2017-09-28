import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from "@angular/router";
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
import { JobListGuard } from './gards/joblisting.guard';
import { AuthGuard } from './gards/auth.guard.';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobsByTags } from './job-search/jobsearch.service';
import { JobApply } from './job-listing/jobapply.service';
import { SearchPageComponent } from './search-page/search-page.component';


const MY_ROUTES: Routes = [
  { path: '', component: AppComponent },
  { path: 'starter', component: StarterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'welcome', component: AfterLoginComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'joblist', component: JobListingComponent, canActivate: [AuthGuard, JobListGuard] },
  { path: 'pending', component: PendingJobListingComponent, canActivate: [AuthGuard] },
  { path: 'result', component: SearchPageComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: 'welcome' }
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
    ProfileComponent,
    JobSearchComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot(MY_ROUTES), FormsModule
  ],
  providers: [LoginService, AuthGuard, JobListGuard, JobsByTags, JobApply],
  bootstrap: [AppComponent]
})
export class AppModule { }
