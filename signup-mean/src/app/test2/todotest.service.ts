
import { Injectable } from '@angular/core';

import { Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Todotest } from './todotest.model';
import { RegUserService } from '../shared/reg-user.service';
import { RegUser } from '../shared/reg-user.model';

@Injectable()
export class TodotestService {

  todos: Todotest[];
  reguserList: RegUser[];
  
  constructor(private http: Http,
              private _reguserService: RegUserService) { }

  getTodos() {
    return this.http.get("/api/todos")
            .map(res => res.json());
  }

  saveTodo(todo) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/api/todo", JSON.stringify(todo), {headers: headers})
              .map(res => res.json());
  }

  // saveTodo(todo) {
  //   var headers = new Headers();
  //   headers.append("Content-Type", "application/json");
  //   return this.http.post("http://localhost:3000/api/todo", JSON.stringify(todo), {headers: headers})
  //             .map(res => res.json());
  // }


  getAllRegUsers() {
    console.log("getAllRegUsers() in todotest service");
    this._reguserService.getRegUsers()
              .subscribe(regusers => {
                this.reguserList = regusers;
                console.log("this.reguserList in getAllRegUsers in todotest service");
                console.log(this.reguserList);
              });
  }


 

}
