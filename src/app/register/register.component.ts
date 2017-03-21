import { Component, OnInit ,Input} from '@angular/core';
import { UtilService } from '../shard';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

	user:any={};
	nameTip:boolean = false;
	isName:boolean = false;

	phoneTip:boolean = false;
	isPhoneNum:boolean = false;

  constructor(
  	private util: UtilService
  ) { }

  ngOnInit() {
  }
  //检查用户名
	onBlurUser() {
    this.nameTip = true;
    this.isName = this.user.name ? true : false;
    if(this.isName == true){
    	this.nameTip = false;
    }
  }
  //检查手机号
  onBlurTel(){
  	this.phoneTip = true;
    this.isPhoneNum = this.util.checkPhoneNum(this.user.telNum);
    if(this.isPhoneNum == true){
    	this.phoneTip = false;
    }
  }
  //注册
  onSubmit(){  
       
  }  
}
