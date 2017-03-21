import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AuthService implements CanActivate {

  INFO_KEY: string = 'user_login_info';
  INFO_VALUE: string = "user_login_password";

	constructor(
    private router: Router,
    private _cookieService:CookieService
  ) {}


	//获取cookie
	getCookie(key:string){
    let cookie = this._cookieService.get(key);
    if(cookie == this.INFO_VALUE){
    	return true;
    }else{
    	return false;
    }
  }


  canActivate(): boolean {
    const isAuth = this.getCookie(this.INFO_KEY);

    if (isAuth == false) {
      this.router.navigate(['login']);
    }

    return isAuth;
  }

}