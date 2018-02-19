import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { RegUserService } from '../shared/reg-user.service';
import { RegUser } from '../shared/reg-user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router,
              private _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getAllRegUsersService();
  }

  backToLogin() {
    this.router.navigate(["/loginpage"]);
  }

  onRegUserSubmit(regForm: NgForm) {
    const newRegUser = {
      first_name: this._reguserService.selectedRegUser.first_name,
      last_name: this._reguserService.selectedRegUser.last_name,
      phone: this._reguserService.selectedRegUser.phone 
    }
    this._reguserService.addRegUser(newRegUser)
              .subscribe(regUser => {
                this._reguserService.getRegUsers();
                regForm.reset();
              });
    this._reguserService.getAllRegUsersService();
    
  }

  onResetRegForm(regForm: NgForm){
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
