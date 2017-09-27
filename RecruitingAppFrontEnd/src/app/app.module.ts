import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router'
// import { AuthHttp, AuthConfig } from 'angular2-jwt';

//services
import { GetUser } from '../services/getUser.service';
import { AuthService } from '../services/auth.service';

//gards
import { AuthGuard } from '../guards/auth.guard'


//components
import { AppComponent } from './app.component';
import { TestComponent } from './test.component';
import { CallbackComponent } from './callback.component';



@NgModule({
  declarations: [
    AppComponent, TestComponent, CallbackComponent
  ],
  imports: [
    BrowserModule, HttpModule, RouterModule.forRoot([{
      path: 'test',
      component: TestComponent, canActivate: [AuthGuard]
    },
    {
      path: 'callback',
      component: CallbackComponent,
    }]) //AuthHttp , {provide: AuthConfig, useValue: new AuthConfig()}
  ],
  providers: [GetUser, AuthGuard, AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
