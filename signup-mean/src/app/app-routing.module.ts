
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { MainComponent } from './main/main.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import { SigninuserComponent } from './signinuser/signinuser.component';
import { TesteditinfoComponent } from './main/testeditinfo/testeditinfo.component';
import { EditReguserComponent } from './signup-page/edit-reguser/edit-reguser.component';
import { AuthGuard } from './shared/auth/auth.guard.service';

const appRoutes: Routes = [
  { path: "hello", component: HelloPageComponent },
  { path: '', redirectTo: 'hello', pathMatch: 'full' },
  { path: "main", component: MainComponent, canActivate: [AuthGuard] },
  { path: "signup", component: SignupPageComponent, canActivate: [AuthGuard] },
  { path: "signinuser", component: SigninuserComponent, canActivate: [AuthGuard] },
  { path: "registeredUsers", component: RegUsersComponent, canActivate: [AuthGuard] },
  { path: "editreguser/:id", component: TesteditinfoComponent, canActivate: [AuthGuard] },
  { path: "edit-reguser/:id", component: EditReguserComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'hello' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
