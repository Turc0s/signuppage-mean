import { Component, OnInit } from '@angular/core';
import { RegUser } from '../shared/reg-user.model';
import { RegUserService } from '../shared/reg-user.service';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {

  regUserList: RegUser[];
  // regUser: RegUser;
  // first_name: string;
  // last_name: string;
  // phone: number;

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getAllRegUsers();
  }

  getAllRegUsers() {
    console.log("GetAllRegUsers()");
    this._reguserService.getRegUsers()
            .subscribe(regusers => {
              this.regUserList = regusers;
            });
  }

}
