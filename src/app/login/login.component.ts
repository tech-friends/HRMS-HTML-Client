import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor( private http: Http,
              private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {

    // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }
  login() {
          this.loading = true;
          let headers = new Headers();
          headers.append('Content-Type', 'application/json');
          headers.append('X-Requested-With', 'XMLHttpRequest');

          let options = new RequestOptions({ headers: headers });
          this.http.post('http://localhost:8080/api/auth/login',{
                    "username": "sanjeet",
                    "password": "myjava11"
                }, options).subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
      }
}
