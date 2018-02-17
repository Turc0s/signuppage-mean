
import { Injectable } from '@angular/core';

import { Http, Headers } from "@angular/http";
import "rxjs/Rx";
import { Todo } from './todo.model';

@Injectable()
export class TodoService {

  todos: Todo[];
  
  constructor(private http: Http) { }

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

}
