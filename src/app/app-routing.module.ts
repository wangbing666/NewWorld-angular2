
import {Routes} from "@angular/router";

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AtestActivityComponent } from './atest-activity/atest-activity.component';
import { LoginComponent } from './login/login.component';
import { LoveCommunityComponent } from './love-community/love-community.component';
import { ProjectIntroductionComponent } from './project-introduction/project-introduction.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from "./shard";

export const rootRouterConfig: Routes = [
	{
    path: "",
    redirectTo: "home",
    pathMatch: 'full',
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthService],
  },
  {
    path: "register",
    component: RegisterComponent,
    canActivate: [AuthService],
  },
  {
    path: "about-us",
    component: AboutUsComponent,
    canActivate: [AuthService],
  },
  {
    path: "atest-activity",
    component: AtestActivityComponent,
    canActivate: [AuthService],
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "love-community",
    component: LoveCommunityComponent,
    canActivate: [AuthService],
  },
  {
    path: "project-introduction",
    component: ProjectIntroductionComponent,
    canActivate: [AuthService],
  }
];