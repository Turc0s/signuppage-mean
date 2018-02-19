import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { RegUser } from "../shared/reg-user.model";
import "rxjs/Rx";

@Injectable()
export class RegUserService {

  reguserList: RegUser[];
  selectedRegUser: RegUser = new RegUser();

  constructor(private http: Http) { }

  // retrieving registered users
  getRegUsers() {
    return this.http.get("http://localhost:3000/api/regusers")
                .map(res => res.json());
  }

  getSingleRegUser(id: any) {
    return this.http.get("http://localhost:3000/api/reguser/"+id)
              .map(res => res.json());
  }

  // add new registered user
  addRegUser(newRegUser) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.post("http://localhost:3000/api/reguser", newRegUser, {headers: headers})
                .map(res => res.json());
  }

  // update the selected reg user
  updateRegUser(id, reguser) {
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http.put("http://localhost:3000/api/reguser/"+id, reguser, {headers: headers})
                .map(res =>  res.json());
  }

  // delete registered user
  deleteRegUser(id: any) {
    return this.http.delete("http://localhost:3000/api/reguser/"+id)
                    .map(res => res.json());
  }

  getAllRegUsersService() {
    this.getRegUsers()
              .subscribe(regusers => {
                this.reguserList = regusers;
              });
  }

}
