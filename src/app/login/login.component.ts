import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor( private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  login() : void {
          this.loading = true;
          this.authenticationService
            .authenticate(this.model.username, this.model.password);
      }
}
