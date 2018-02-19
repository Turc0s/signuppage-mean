import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ViewEncapsulation } from '@angular/core';
import { RegUser } from '../../shared/reg-user.model';
import { RegUserService } from '../../shared/reg-user.service';

@Component({
  selector: 'app-testeditinfo',
  templateUrl: './testeditinfo.component.html',
  styleUrls: ['./testeditinfo.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TesteditinfoComponent implements OnInit {

  reguser: RegUser;

  constructor(private router: Router, 
              private actRoute: ActivatedRoute,
              private http: Http,
              private _reguserService: RegUserService) { }

  ngOnInit() {
    this.getRegUserDetail(this.actRoute.snapshot.params["id"]);
  }

  getRegUserDetail(_id) {
    // this.http.get("/api/reguser/"+_id)
    //         .subscribe();
    this._reguserService.getSingleRegUser(_id)
                .subscribe(data => {
                  this.reguser = data;
                });
  }




}
