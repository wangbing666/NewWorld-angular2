import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {rootRouterConfig} from "./app-routing.module";

import { AboutUsComponent } from './about-us/about-us.component';
import { AtestActivityComponent } from './atest-activity/atest-activity.component';
import { LoginComponent } from './login/login.component';
import { LoveCommunityComponent } from './love-community/love-community.component';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { HomeComponent } from './home/home.component';

import { NavbarComponent,ContactService,UtilService,AuthService} from './shard';
import { RegisterComponent } from './register/register.component';

import { CookieService } from 'angular2-cookie/services/cookies.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutUsComponent,
    AtestActivityComponent,
    LoginComponent,
    LoveCommunityComponent,
    ProjectIntroductionComponent,
    HomeComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [ContactService,UtilService,CookieService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
