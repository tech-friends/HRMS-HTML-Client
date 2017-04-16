import { Component, OnInit } from '@angular/core';

import {UserService} from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private userName : String;

  constructor(private userService:UserService) { }

  ngOnInit() {
    this.userName = this.userService.getUserName();
  }

}
