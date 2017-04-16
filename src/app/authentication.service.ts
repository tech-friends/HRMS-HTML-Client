import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/toPromise";
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  private _user: User;

    constructor(private http: Http, private router: Router) { }

    private onAuthenticated(response: any): void {
        this._user = response.json().token;
        localStorage.setItem('token', response.json().token);
        localStorage.setItem('token_refresh', response.json().refreshToken);
        this.router.navigate(['/home']);
    }

    authenticate(username: string, password: string): Promise<void> {
      let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('X-Requested-With', 'XMLHttpRequest');

          let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/api/auth/login', { password, username }, options)
            .toPromise()
            .then(response => this.onAuthenticated.call(this, response));
    }

    // signUp(user: User): Promise<void> {
    //     return this.http.post('/api/sign-up', user)
    //         .toPromise()
    //         .then(response => this.onAuthenticated.call(this, response));
    // }

    user(): User {
        return this._user;
    }

}
