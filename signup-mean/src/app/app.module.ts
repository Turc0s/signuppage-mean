import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';

import { ServiceWorkerModule } from "@angular/service-worker";
import { environment } from "../environments/environment";  

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { MainComponent } from './main/main.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RegUserService } from './shared/reg-user.service';
import { ShowinfoComponent } from './main/showinfo/showinfo.component';
import { ChangeinfoComponent } from './main/changeinfo/changeinfo.component';
import { TesteditinfoComponent } from './main/testeditinfo/testeditinfo.component';
import { RegtestComponent } from './signup-page/regtest/regtest.component';
import { EditReguserComponent } from './signup-page/edit-reguser/edit-reguser.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { AuthGuard } from './shared/auth/auth.guard.service';

const appRoutes: Routes = [
  { path: "hello", component: HelloPageComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full'},
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupPageComponent, canActivate: [AuthGuard] },
  { path: "registeredUsers", component: RegUsersComponent, canActivate: [AuthGuard] },
  { path: "editreguser/:id", component: TesteditinfoComponent, canActivate: [AuthGuard] },
  { path: "edit-reguser/:id", component: EditReguserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'hello'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloPageComponent,
    MainComponent,
    RegUsersComponent,
    SignupPageComponent,
    ShowinfoComponent,
    ChangeinfoComponent,
    TesteditinfoComponent,
    RegtestComponent,
    EditReguserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    OAuthModule.forRoot(),
    ServiceWorkerModule.register("ngsw-worker.js", {enabled: environment.production})
  ],
  providers: [RegUserService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
