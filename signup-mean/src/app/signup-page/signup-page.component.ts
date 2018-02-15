import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { RegUserService } from '../shared/reg-user.service';
import { RegUser } from '../shared/reg-user.model';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  reguserList: RegUser[];

  constructor(private router: Router,
              private _reguserService: RegUserService) { }

  ngOnInit() {
    this._reguserService.getRegUsers();
  }

  backToLogin() {
    this.router.navigate(["/loginpage"]);
  }

  onRegUserSubmit(regForm: NgForm) {
    console.log("onRegUserSubmit()");
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

  onResetRegForm(regForm: NgForm){
    
  }

}
