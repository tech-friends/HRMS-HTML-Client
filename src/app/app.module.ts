import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule} from './auth/auth.module'

import {AuthenticatedGuard} from "./authenticated.guard";
import {AuthenticationService} from "./authentication.service";
import {UserService} from "./user.service"

import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    AlertModule.forRoot(),
    SharedModule.forRoot()
  ],
  providers: [
        AuthenticationService,
        AuthenticatedGuard,
        UserService
      ],
  bootstrap: [AppComponent]
})
export class AppModule { }
