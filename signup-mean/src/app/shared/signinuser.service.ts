import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import "rxjs/Rx";
import { OAuthService } from 'angular-oauth2-oidc';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class SignInUserService {

    apikey = "SSWS apikey";
    url = "{oktaurl}/api/v1/users/";

    constructor(private httpClient: HttpClient, 
              private oauthService: OAuthService) { }


    // retrieving signin user
    getUserLoggedInME() : Observable<any>{

        return this.httpClient.get(this.url+"me", {
            headers: new HttpHeaders()
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", this.apikey)
        });
    }

    getUserLoggedInID(id) : Observable<any>{

        return this.httpClient.get(this.url+id, {
            headers: new HttpHeaders()
            .set("Accept", "application/json")
            .set("Content-Type", "application/json")
            .set("Authorization", this.apikey)
        });
    }

}
