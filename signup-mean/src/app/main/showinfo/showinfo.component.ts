import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {

  // reguserList: RegUser[];

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getAllRegUsersService();
    // this.getAllRegUsers();
    // console.log("get all users ng init showinfo");
    // console.log(this.getAllRegUsers());
  }

  // getAllRegUsers() {
  //   console.log("getAllRegUsers() in showinfo");
  //   this._reguserService.getRegUsers()
  //           .subscribe(regusers => {
  //             this.reguserList = regusers;
  //             console.log("get all users show info method, subscribe");
  //             console.log(regusers);
  //           });
  // }

  onEdit(reguser: RegUser) {
    console.log("in onEdit()");
    // this._reguserService.selectedRegUser = reguser;
    this._reguserService.getAllRegUsersService();
    this._reguserService.selectedRegUser = Object.assign({}, reguser);
    this._reguserService.getAllRegUsersService();
    // this.getAllRegUsers();
    // console.log("getAllRegUsers() in onEdit() showinfo")
  }

  onDeleteRegUser(id: any) {
    var regList = this._reguserService.reguserList;
    // var regList = this.reguserList;
    this._reguserService.deleteRegUser(id)
              .subscribe(data => {
                if(data.n == 1) {
                  for(var i = 0; i < regList.length; i++) {
                    if(regList[i]._id == id) {
                      regList.splice(i,1);
                    }
                  }
                }
              });
  }

}
