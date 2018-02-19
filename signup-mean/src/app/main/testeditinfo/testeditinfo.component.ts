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

  constructor(private router: Router, 
              private actRoute: ActivatedRoute,
              private _reguserService: RegUserService) { }

  ngOnInit() {
    console.log("in ngOnInit reg user details. getRegUserDetail()");
      this.getRegUserDetail(this.actRoute.snapshot.params['id']);
  }

  getRegUserDetail(_id) {
    this._reguserService.getSingleRegUser(_id)
                .subscribe((data: RegUser) => {
                  this._reguserService.reguserObj = data;
                });
  }

  onDeleteRegUser(id) {
        this._reguserService.deleteRegUser(id)
          .subscribe(res => {
              this.router.navigate(['/signup']);
            }, (err) => {
              console.log(err);
            }
          );
          console.log("Book deleted: " + id);
      }

}
