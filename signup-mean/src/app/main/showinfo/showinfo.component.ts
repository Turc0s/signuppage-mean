import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {

  reguserList: RegUser[];

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getAllRegUsers();
  }

  getAllRegUsers() {
    console.log("getAllRegUsers() in showinfo");
    this._reguserService.getRegUsers()
            .subscribe(regusers => {
              this.reguserList = regusers;
            });
  }

}
