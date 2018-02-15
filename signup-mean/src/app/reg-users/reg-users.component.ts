import { Component, OnInit } from '@angular/core';
import { RegUser } from '../shared/reg-user.model';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {

  regUserList: RegUser[];

  constructor() { }

  ngOnInit() {
  }

}
