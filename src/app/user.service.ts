import { Injectable } from '@angular/core';
import {AUTH_PROVIDERS,AuthHttp} from "angular2-jwt";

@Injectable()
export class UserService {

  constructor(private authHttp: AuthHttp) { }

  getUserName():String{
    let name:String;
    this.authHttp.get("http://localhost:8080/api/me/")
    .subscribe(
      data => name = data.json().username,
      err => console.log(err),
      () => console.log('Request Complete')
    );
    return name;
  }

}
