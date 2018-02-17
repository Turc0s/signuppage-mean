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

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getAllRegUsers();
  }

  getAllRegUsers() {
    console.log("GetAllRegUsers() in regUsers");
    this._reguserService.getRegUsers()
            .subscribe(regusers => {
              this.regUserList = regusers;
            });
  }

}
