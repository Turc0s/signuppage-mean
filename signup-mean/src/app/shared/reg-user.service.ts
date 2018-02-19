import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { RegUser } from "../shared/reg-user.model";
import "rxjs/Rx";

@Injectable()
export class RegUserService {

  reguserList: RegUser[];
  selectedRegUser: RegUser = new RegUser();
  reguserObj: any = {};

  constructor(private httpClient: HttpClient) { }

  // retrieving registered users
  getRegUsers() {
    return this.httpClient.get("http://localhost:3000/api/regusers");
  }

  getSingleRegUser(id: any) {
    return this.httpClient.get("http://localhost:3000/api/reguser/"+id);
  }

  // add new registered user
  addRegUser(newRegUser) {
    return this.httpClient.post("http://localhost:3000/api/reguser", newRegUser);
  }

  // update the selected reg user
  updateRegUser(id, reguser) {
    return this.httpClient.put("http://localhost:3000/api/reguser/"+id, reguser);
  }

  updateEditRegUser(id) {
    return this.httpClient.put("http://localhost:3000/api/reguser/"+id, this.reguserObj);
  }

  // delete registered user
  deleteRegUser(id: any) {
    return this.httpClient.delete("http://localhost:3000/api/reguser/"+id);
  }

  getAllRegUsersService() {
    this.getRegUsers()
              .subscribe((regusers: RegUser[]) => {
                this.reguserList = regusers;
              });
  }

}
