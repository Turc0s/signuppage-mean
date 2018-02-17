import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HelloPageComponent } from './hello-page/hello-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainComponent } from './main/main.component';
import { RegUsersComponent } from './reg-users/reg-users.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { RegUserService } from './shared/reg-user.service';
import { ShowinfoComponent } from './main/showinfo/showinfo.component';
import { ChangeinfoComponent } from './main/changeinfo/changeinfo.component';
import { TesteditinfoComponent } from './main/testeditinfo/testeditinfo.component';
import { RegtestComponent } from './signup-page/regtest/regtest.component';
import { TodosComponent } from './test/todos/todos.component';
import { TodoService } from './test/todo.service';
import { TodotestComponent } from './test2/todotest/todotest.component';
import { TodotestService } from './test2/todotest.service';
import { Todotest2Component } from './test2/todotest2/todotest2.component';

const appRoutes: Routes = [
  { path: "", component: HelloPageComponent },
  { path: "loginpage", component: LoginPageComponent },
  { path: "main", component: MainComponent },
  { path: "signup", component: SignupPageComponent },
  { path: "registeredUsers", component: RegUsersComponent },
  { path: "editreguser/:id", component: TesteditinfoComponent },
  { path: "todos", component: TodosComponent },
  { path: "todostest", component: TodotestComponent },
  { path: "todostest2", component: Todotest2Component }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HelloPageComponent,
    LoginPageComponent,
    MainComponent,
    RegUsersComponent,
    SignupPageComponent,
    ShowinfoComponent,
    ChangeinfoComponent,
    TesteditinfoComponent,
    RegtestComponent,
    TodosComponent,
    TodotestComponent,
    Todotest2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RegUserService, TodoService, TodotestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
