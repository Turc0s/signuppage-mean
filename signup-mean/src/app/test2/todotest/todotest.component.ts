
import { Component, OnInit } from '@angular/core';
import { TodotestService } from "../todotest.service";
import { Todotest } from '../todotest.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegUserService } from '../../shared/reg-user.service';
import { RegUser } from '../../shared/reg-user.model';

@Component({
  selector: 'app-todotest',
  templateUrl: './todotest.component.html',
  styleUrls: ['./todotest.component.css']
})
export class TodotestComponent implements OnInit {

  regUserList: RegUser[];

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getAllRegUsers();
    console.log("reguserlist");
    console.log(this.regUserList);
  }

  getAllRegUsers() {
    console.log("GetAllRegUsers() intodostest()");
    this._reguserService.getRegUsers()
            .subscribe(regusers => {
              this.regUserList = regusers;
              console.log("in get all reg users() :");
              console.log(regusers)
              console.log("this.reguserlist");
              console.log(this.regUserList);
            });
  }

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
    console.log("in todotest get all users call (onregusersubmit)");
  }

}

