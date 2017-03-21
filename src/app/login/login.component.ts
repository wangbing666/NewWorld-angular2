import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService} from '../shard';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  INFO_KEY: string = 'user_login_info';
  INFO_VALUE: string = "user_login_password"

  user:any={}


  constructor(
  	private _constactService: ContactService,
    private _cookieService:CookieService,
    private router: Router,
  	) { }

  ngOnInit() {

  }


  getLogin(){
    console.log(this.user);
    this._constactService.addContact(this.user).subscribe(data => {
      if(data.code == 1){
        //存储cookie
        this._cookieService.put(this.INFO_KEY,this.INFO_VALUE);
        this.router.navigate(['home']);
      }else{
        this.user.username = data.data;
      }
    },err => {
        this.user.username = "服务器请求错误";
    })
  	
  }
}
