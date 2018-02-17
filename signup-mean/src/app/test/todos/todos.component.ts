
import { Component, OnInit } from '@angular/core';
import { TodoService } from "../todo.service";
import { Todo } from '../todo.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegUserService } from '../../shared/reg-user.service';
import { RegUser } from '../../shared/reg-user.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  regUserList: RegUser[];

  constructor(private _todoService: TodoService,
            private _reguserService: RegUserService) { }

  ngOnInit() {
    this.todos = [];
    this._todoService.getTodos()
            .subscribe(todos => {
              this.todos = todos;
            });

    this.getAllRegUsers();
  }

  getAllRegUsers() {
    console.log("GetAllRegUsers() intodos()");
    this._reguserService.getRegUsers()
            .subscribe(regusers => {
              this.regUserList = regusers;
            });
  }

  
  onTodoSubmit(todoForm: NgForm) {
    var result;
    var newTodo = {
      text: todoForm.value,
      isCompleted: false
    };

    result = this._todoService.saveTodo(newTodo);
    result.subscribe(data => {
      this.todos.push(newTodo);
      todoForm.reset();
    });
  
  }

  addTodo(event, todoText) {
    var result;
    var newTodo = {
      text: todoText.value,
      first_name: todoText.value,
      last_name: todoText.value,
      isCompleted: false
    };
    result = this._todoService.saveTodo(newTodo);
    result.subscribe(data => {
      this.todos.push(newTodo);
      todoText.value = "";
    });
  }

  // --------------------------------

  onRegUserSubmit(regForm: NgForm) {
    console.log("onRegUserSubmit()");
    const newRegUser = {
      first_name: this._reguserService.selectedRegUser.first_name,
      last_name: this._reguserService.selectedRegUser.last_name,
      phone: this._reguserService.selectedRegUser.phone 
    }
    this._reguserService.addRegUser(newRegUser)
              .subscribe(regUser => {
                // this.reguserList.push(regUser);
                this._reguserService.getRegUsers();
                regForm.reset();
              });
    this.getAllRegUsers();
  }

}

