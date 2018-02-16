import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegUserService } from '../../shared/reg-user.service';
import { RegUser } from '../../shared/reg-user.model';

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {
  
  reguserList: RegUser[];

  constructor(private router: Router,
              private _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getRegUsers();
  }

  onSubmit(regForm: NgForm) {
    console.log("onSubmit()");
    const newRegUser = {
      first_name: this._reguserService.selectedRegUser.first_name,
      last_name: this._reguserService.selectedRegUser.last_name,
      phone: this._reguserService.selectedRegUser.phone 
    }
    this._reguserService.addRegUser(newRegUser)
              .subscribe(regUser => {
                // this.reguserList.push(regUser);
                this._reguserService.getRegUsers();
                regForm.reset();
              });
  }

  resetForm(regForm: NgForm){
    if(regForm != null) {
      regForm.reset();
    }
    this._reguserService.selectedRegUser = {
      _id: null,
      first_name: "",
      last_name: "",
      phone: null
    }
  }
  
}