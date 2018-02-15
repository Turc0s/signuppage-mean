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

  onDeleteRegUser(id: any) {
    var regList = this.reguserList;
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
