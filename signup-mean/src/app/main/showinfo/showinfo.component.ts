import { Component, OnInit } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent implements OnInit {

  constructor(private _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getAllRegUsersService();
  }

  onEdit(reguser: RegUser) {
    console.log("in onEdit()");

    this._reguserService.selectedRegUser = Object.assign({}, reguser);
    this._reguserService.getAllRegUsersService();
  }

  onDeleteRegUser(id: any) {
    var regList = this._reguserService.reguserList;
    this._reguserService.deleteRegUser(id)
              .subscribe(data => {
                  for(var i = 0; i < regList.length; i++) {
                    if(regList[i]._id == id) {
                      regList.splice(i,1);
                    }
                  }
              }, (err) => {
                console.log(err);
              });
  }

}
