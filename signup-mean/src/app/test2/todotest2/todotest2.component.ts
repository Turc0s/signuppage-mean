
import { Component, OnInit } from '@angular/core';
import { TodotestService } from "../todotest.service";
import { Todotest } from '../todotest.model';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegUserService } from '../../shared/reg-user.service';
import { RegUser } from '../../shared/reg-user.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-todotest2',
  templateUrl: './todotest2.component.html',
  styleUrls: ['./todotest2.component.css']
})
export class Todotest2Component implements OnInit {

  // regUserList: RegUser[];;

  constructor(private _reguserService: RegUserService,
              private _todotestService: TodotestService) { }

  ngOnInit() {
    // this.getAllRegUsers();
    this._todotestService.getAllRegUsers();
    // console.log("reguserlist");
    // console.log(this.regUserList);
  }

  // getAllRegUsers() {
  //   console.log("GetAllRegUsers() intodostest()");
  //   this._reguserService.getRegUsers()
  //           .subscribe(regusers => {
  //             this.regUserList = regusers;
  //             console.log("in get all reg users() :");
  //             console.log(regusers)
  //             console.log("this.reguserlist");
  //             console.log(this.regUserList);
  //             // this._reguserService.getRegUsers = regusers;
  //           });
  // }

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
              });
      regForm.reset();
      // this.getAllRegUsers();
      console.log("this todoservice get all reg users: ");
      console.log("..................................");
      this._todotestService.getAllRegUsers();
      console.log("..................................");
  }

    // console.log("this.getallusers in onregusersubmit");
    // this.getAllRegUsers();
    // console.log("in todotest get all users call (onregusersubmit)");
    // this.subscription = this._todotestService.getAllRegUsers();
    // console.log("subscription: ");
    // console.log(this.subscription);
    // console.log("...................................");
    // console.log("this.todotestservice.getallusers()");
    // console.log(this._todotestService.getAllRegUsers());

}


