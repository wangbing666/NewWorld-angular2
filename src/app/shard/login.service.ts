import {Injectable} from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

const CONTACT_URL = `http://127.0.0.1/thinkphp/index.php/home/user/login`;

@Injectable()
export class ContactService {

  constructor(
    private http:Http
  ) {}

  request(url:string, opts:any) {
    return this.http.request(url, new RequestOptions(opts))
    .map(res => {
      let _res = res.json();
      if(opts.id){
        for(let i=0; i<_res.length; i++){
          if(_res[i].id == opts.id){
            _res = _res[i];
          }
        }
      }
      if(opts.collection){
        let temp:any = [];
        for(let i=0; i<_res.length; i++){
          if(_res[i].collection == opts.collection){
            temp.push(_res[i]);
          }
        }
        _res = temp;
      }
      return _res;
    })
  }

  get(url:string, opts?:Object) {
    return this.request(url, (<any>Object).assign({
      method: 'get'
    }, opts));
  }

  getContactsData() {
    return this.get(CONTACT_URL);
  }

  getContactById(id:number) {
    return this.get(CONTACT_URL, { id: id });
  }


  getCollections() {
    return this.get(CONTACT_URL, { collection: 1 });
  }

  addContact(obj) {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    let options = new RequestOptions({ headers: headers });
    let name = obj.name;
    let password = obj.password; 
    let creds = "name=" + name + "&password=" + password;
    return this.http.post(CONTACT_URL, creds, options).map(res => res.json());
  }

}
