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
  
  constructor(private router: Router,
    public _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getAllRegUsersService();
  }

  onSubmit(regForm: NgForm) {
    console.log("onSubmit()");
    if(regForm.value._id == null) {
      this.addNewRegUser(regForm.value);
    }
    else {
      this.updateRegUser(regForm.value, regForm);
    }

    this.resetForm(regForm);
  }

  addNewRegUser(regForm: NgForm) {
    const newRegUser = {
      first_name: this._reguserService.selectedRegUser.first_name,
      last_name: this._reguserService.selectedRegUser.last_name,
      phone: this._reguserService.selectedRegUser.phone 
    }
    this._reguserService.addRegUser(newRegUser)
              .subscribe(regUser => {
                this._reguserService.getRegUsers();
              });
              this._reguserService.getAllRegUsersService();
  }

  updateRegUser(reguser: RegUser, regForm: NgForm) {
    this._reguserService.updateRegUser(reguser._id, reguser)
                  .subscribe(reguser => {
                    this._reguserService.getRegUsers();
                  });
                  this._reguserService.getAllRegUsersService();
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