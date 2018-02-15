import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(["/loginpage"]);
  }

  onRegUserSubmit(regForm: NgForm) {
    
  }

  onResetRegForm(regForm: NgForm){

  }

}
