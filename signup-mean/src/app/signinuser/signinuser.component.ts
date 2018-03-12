import { Component, OnInit } from '@angular/core';
import { OAuthService } from "angular-oauth2-oidc";
import { HttpHeaders } from '@angular/common/http/src/headers';
import { SignInUserService } from '../shared/signinuser.service';
import { HttpErrorResponse } from '@angular/common/http/src/response';

@Component({
  selector: 'app-signinuser',
  templateUrl: './signinuser.component.html',
  styleUrls: ['./signinuser.component.css']
})
export class SigninuserComponent implements OnInit {

  user: Object;

  constructor(private oauthservice: OAuthService,
    private _signinuserservice: SignInUserService) {
  }

  ngOnInit() {
    this.user = this.oauthservice.getIdentityClaims();
    
    if (this.oauthservice.hasValidAccessToken()) {
      const accessToken = this.oauthservice.getAccessToken()
      const idToken = this.oauthservice.getIdToken();
    }
  }

  getuserInfoME() {
    this._signinuserservice.getUserLoggedInME()
      .subscribe(user => {
        console.log("USERS/ME");
        console.log(user);
      });
  }

  getuserInfoID(id) {
    this._signinuserservice.getUserLoggedInID(id)
      .subscribe(user => {
        console.log("USERS/ID");
        console.log(user);
      });
  }

}
