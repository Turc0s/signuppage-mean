import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-hello-page',
  templateUrl: './hello-page.component.html',
  styleUrls: ['./hello-page.component.css']
})
export class HelloPageComponent implements OnInit {

  constructor(private oauthService: OAuthService) {
  }

  // login() {
  //   this.oauthService.initImplicitFlow();
  // }

  // logout() {
  //   this.oauthService.logOut();
  // }

  get givenName() {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }

    return claims['name'];
  }


  ngOnInit() {
    
  }

}
