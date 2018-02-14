import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

const appRoutes: Routes = [
  { path: "", component: HelloPageComponent },
  { path: "loginpage", component: LoginPageComponent },
  { path: "main", component: MainComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "registeredUsers", component: RegUsersComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloPageComponent,
    LoginPageComponent,
    MainComponent,
    RegUsersComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
